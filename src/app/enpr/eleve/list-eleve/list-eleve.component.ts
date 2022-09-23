import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService, SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Eleve } from '../../domain/eleve';
import { ConfirmationService } from 'primeng/api';

import * as html2pdf from 'html2pdf.js';
import { LoginComponent } from '../../../login/login.component';
import { TokenStorageService } from '../../../_services/token-storage.service';
@Component({
  selector: 'app-list-eleve',
  templateUrl: './list-eleve.component.html',
  styleUrls: ['./list-eleve.component.scss']
})
export class ListEleveComponent implements OnInit {
  currentUserRole: any;
  public dataToExcel: any[];
  public fileName: any;
  msgs: Message[] = [];

  entities: Eleve[];
  ojetUrl: string = 'eleve';
  ojetUrlSession: string = 'session';
  session: SelectItem[];
  bodyTableExport: any;
  isSelected :boolean = false;


  // tslint:disable-next-line: max-line-length
  constructor(private confirmationService: ConfirmationService, private tokenStorageService: TokenStorageService, private token: TokenStorageService, private router: Router, private crudservice: CrudGlobalService, private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    console.log(this.currentUserRole);
    this.dataToExcel = [];
    this.chargerSession()
    /*this.crudservice.getlistEntity(this.ojetUrl)
      .subscribe(data => {
        this.entities = data.result;
        this.dataToExcel = data.result;
        this.bodyTableExport = [];
        data.result.forEach(eleve => {
          this.bodyTableExport.push([
            eleve.cinEl
            , eleve.prenomEl
            , eleve.nomEl,


          ])

        });
      });*/
  }

  delete(entity: Eleve): void {
    this.confirmationService.confirm({
      message: 'هل أنت متأكد أنك تريد تنفيذ هذا الإجراء?',
      accept: () => {
        //Actual logic to perform a confirmation
        this.crudservice.deleteLigne(this.ojetUrl, entity.id)
          .subscribe(data => {

            this.entities = this.entities.filter(u => u !== entity);
            this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'تمت عملية الحذف.' });

          });
      }
    });
  }

  edit(entity: Eleve): void {
    window.localStorage.removeItem("editEleveId");

    window.localStorage.setItem("editEleveId", entity.id.toString());
    this.router.navigate(['enpr/edit-eleve']);
  };

  addConge(): void {
    this.router.navigate(['enpr/add-eleve']);
  };

  generatePdf() {
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    /*aaa: pdfMake.vfs;
    .createPdf(documentDefinition).open();*/

  }


  exportPdf() {

    const options = {
      filename: 'file.pdf',
      html2convas: {},
      jsPDF: { orientation: 'landscape' }
    };
    const content: Element = document.getElementById('ourTbale');
    html2pdf()
      .from(content)
      .set(options)
      .save();

  }
  /*

  exportExcel() {

       const worksheet = xlsx.utils.json_to_sheet(this.bodyTableExport);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "primengTable");

  }

  saveAsExcelFile(buffer: any, fileName: string): void {

        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);

  }*/

  printexportPdf(entity: Eleve) {
    window.localStorage.removeItem("printEleveId");
    window.localStorage.setItem("printEleveId", entity.id.toString());
    this.router.navigate(['enpr/print-eleve']);
    // window.open('enpr/print-eleve', '_blank');

  }
  detailsEleve(entity: Eleve) {
    window.localStorage.removeItem("detalEleveId");
    window.localStorage.setItem("detalEleveId", entity.id.toString());
    this.router.navigate(['enpr/details-eleve']);
  }

  getAllEleve() {
    setTimeout(() => {
      this.fileName = 'قائمة التلاميذ.xlsx';
      const element: HTMLElement = document.getElementById('mybutton') as HTMLElement;
      element.click();
    }, 1000);
  }

  chargerSession() {
    this.crudservice.getlistEntity(this.ojetUrlSession).subscribe(data => {
      this.session = [];
      data.result.forEach((session: any, value: any) => {
        //   console.log('sesssss');
        //  console.log(data.result);
        this.session.push({ label: " الدورة " +session.numSession, value: session });
      });

    });
  }
  onChangeSession(e) {
    this.isSelected=true;
    this.entities =null;
    // console.log(e.value);
    this.crudservice.findAllEleveBySession(this.ojetUrl, e.value.id).subscribe(data => {
      this.entities = data.result;
      this.dataToExcel = data.result;
      this.bodyTableExport = [];
      data.result.forEach(eleve => {
        this.bodyTableExport.push([
          eleve.cinEl
          , eleve.prenomEl
          , eleve.nomEl,


        ])

      });
    });
  }
}
