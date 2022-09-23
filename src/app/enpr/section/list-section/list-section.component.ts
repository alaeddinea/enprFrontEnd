import { Component, OnInit, SystemJsNgModuleLoader, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';


import { Section } from '../../domain/section';
import { HttpClient } from '@angular/common/http';
import { products } from './products';
import { LoginComponent } from '../../../login/login.component';
import { TokenStorageService } from '../../../_services/token-storage.service';


@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.scss']
})
export class ListSectionComponent implements OnInit {
  selectedSex: any;
    currentUserRole: any ;
  //public fields: string[] = Object.keys(this.data[0]);
  msgs: Message[] = [];

  entities: Section[];
  ojetUrl: string = 'section';
  ojetUrlEleve: string = 'eleve';
  public dataToExcel: any[];
public fileName: any;


  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private httpClient: HttpClient ,private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;

      });
 }
  getAllEleveBySection(entity: Section){

    this.crudservice.findAllEleveBySection(this.ojetUrlEleve,entity.id)
    .subscribe( data => {
     this.dataToExcel = [];
     if (this.selectedSex === '0') {
      this.dataToExcel = data.result.filter( u => u.sexeEl === this.selectedSex );
    } else  if (this.selectedSex === '1') {
      this.dataToExcel = data.result.filter( u => u.sexeEl === this.selectedSex );
    } else{
      this.dataToExcel = data.result;
    }
      if(data.result) {
        setTimeout(() => {
          this.fileName=" الفصيل"+entity.numSection+" السرية"+ entity.company.numCompany+"  :الفوج  "+ entity.group.nomGroup +" الدورة"+entity.session.numSession+" .xlsx";
          console.log(this.dataToExcel);
          let element :HTMLElement=document.getElementById('mybutton') as HTMLElement;
          element.click();
        }, 1000);

    }

      //this.entities = this.entities.filter(u => u !== entity);
    // this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});

    })
  }
  delete(entity: Section): void {
    this.crudservice.deleteLigne(this.ojetUrl,entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});

      })
  };

  edit(entity: Section): void {
    window.localStorage.removeItem("editSectionId");

    window.localStorage.setItem("editSectionId", entity.id.toString());
    this.router.navigate(['enpr/edit-section']);
  };

  addConge(): void {
    this.router.navigate(['enpr/add-section']);
  };
  printexportPdf(entity: Section){
    this.crudservice.report(this.ojetUrlEleve,entity.id)
    .subscribe( data => {
      //  this.entities = data.result;
      console.log("dataPrint");
      console.log(data);

       // window.open(data.result, "_blank");

     // window.location.href = 'http://192.168.100.70:8080/enprBackend/eleves';
     setTimeout (() => {

      window.open('http://192.168.100.70:8080/enprBackend/eleves', "_blank");
   }, 1000);

       // this.router.navigate(['enpr/print-section']);
      });
    /*window.localStorage.removeItem("printSectionId");
    window.localStorage.setItem("printSectionId", entity.id.toString());
    this.router.navigate(['enpr/print-section']);
*/
  }

}
