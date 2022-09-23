import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';

import { Gouvernorat } from '../../domain/gouvernorat';
import* as html2pdf from 'html2pdf.js';
import { LoginComponent } from '../../../login/login.component';
import { TokenStorageService } from '../../../_services/token-storage.service';

@Component({
  selector: 'app-list-gouvernorat',
  templateUrl: './list-gouvernorat.component.html',
  styleUrls: ['./list-gouvernorat.component.scss']
})
export class ListGouvernoratComponent implements OnInit {
  currentUserRole: any;
  msgs: Message[] = [];

  entities: Gouvernorat[];
  ojetUrl: string = 'gouvernorat';
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private token: TokenStorageService,  private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    window.localStorage.removeItem("GouvernoratId");
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;
      });
  }

  delete(entity: Gouvernorat): void {
    this.crudservice.deleteLigne(this.ojetUrl,entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});
        
      })
  };

  edit(entity: Gouvernorat): void {
    window.localStorage.removeItem("GouvernoratId");

    window.localStorage.setItem("GouvernoratId", entity.id.toString());
    this.router.navigate(['enpr/edit-gouvernorat']);
  };

  addConge(): void {
    this.router.navigate(['enpr/add-gouvernorat']);
  };
  afficherdeligation(entity: Gouvernorat){
  //  window.localStorage.removeItem("GouvernoratId");

    window.localStorage.setItem("GouvernoratId", entity.id.toString());
    this.router.navigate(['enpr/list-delegation']);  
  }
  exportPdf() {

    const  options ={
      filename:'file.pdf',
      html2convas:{},
      jsPDF : {orientation :'landscape'}
    };
    const content:  Element= document.getElementById('ourTbale');
    html2pdf()
    .from(content)
    .set(options)
    .save();
     
    }
}