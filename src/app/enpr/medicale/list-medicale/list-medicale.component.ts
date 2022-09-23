
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';

import { Medicale } from '../../domain/medicale';
import { Exent } from '../../domain/exent';
import { DatePipe } from '@angular/common';
import { TokenStorageService } from '../../../_services/token-storage.service';

@Component({
  selector: 'app-list-medicale',
  templateUrl: './list-medicale.component.html',
  styleUrls: ['./list-medicale.component.scss']
})
export class ListMedicaleComponent implements OnInit {
  currentUserRole: any;
  dateDebut: Date;
  exentObjt: Exent;
  public dataToExcel: any[];
  public fileName: any;
  msgs: Message[] = [];

  entities: Medicale[];
  ojetUrl: string = 'medicale';
  ojetUrlRepoElve: string = 'repoeleve';
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private datePipe: DatePipe, private router: Router, private crudservice: CrudGlobalService, private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    this.crudservice.getlistEntity(this.ojetUrl)
      .subscribe(data => {
        this.entities = data.result;
      });
  }

  delete(entity: Medicale): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.id)
      .subscribe(data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Row Deleted Success.' });
      });
  }

  edit(entity: Medicale): void {
    window.localStorage.removeItem("editMedicaleId");

    window.localStorage.setItem("editMedicaleId", entity.id.toString());
    this.router.navigate(['enpr/edit-medicale']);
  };

  addConge(): void {
    this.router.navigate(['enpr/add-medicale']);
  }
  listRepo() {
   
    this.crudservice.getExcelRepo(this.ojetUrlRepoElve, this.dateDebut)
      .subscribe(data => {
        this.dataToExcel = [];
        //  this.dataToExcel = data.result;
        if (data.result) {
          data.result.forEach((exent: any, index: number) => {
            this.exentObjt = new Exent();
            this.exentObjt.num = index + 1;
            this.exentObjt.dateDebutRepo = this.datePipe.transform(new Date(exent[0]), 'yyyy-MM-dd');
            this.exentObjt.dateFinRepo = this.datePipe.transform(new Date(exent[1]), 'yyyy-MM-dd');
            this.exentObjt.numDossierRecrueEl = exent[2];
            this.exentObjt.cinEl = exent[3];
            this.exentObjt.prenomEl = exent[4];
            this.exentObjt.identitePereEl = exent[5];
            this.exentObjt.nomEl = exent[6];
            this.exentObjt.nomGroup = exent[7];
            this.exentObjt.numCompany = exent[8];
            this.exentObjt.numSection = exent[9];
            this.exentObjt.nomMedicale = exent[10];
            this.exentObjt.session = exent[11];
            this.exentObjt.grade = exent[12];
            this.dataToExcel.push(this.exentObjt);
          });
          console.log(this.dataToExcel);
          if (this.dataToExcel) {
            setTimeout(() => {
              this.fileName = '' + this.dateDebut + 'قائمة الإعفاءات  بتاريخ .xlsx';
              const element: HTMLElement = document.getElementById('mybutton') as HTMLElement;
              element.click();
            }, 1000);
          }
        } else {
          alert('لا يوجد إعفاءات')
        }
      });
  }
}
