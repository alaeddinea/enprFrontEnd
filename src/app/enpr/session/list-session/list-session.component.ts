import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Session } from '../../domain/session';
import { LoginComponent } from '../../../login/login.component';
import { TokenStorageService } from '../../../_services/token-storage.service';


@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.scss']
})
export class ListSessionComponent implements OnInit {
    currentUserRole: any ;
  ojetUrlEleve: string = 'eleve';
  public dataToExcel: any[];
public fileName: any;
  msgs: Message[] = [];

  entities: Session[];
  ojetUrl: string = 'session';
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;
      });
  }
  getAllEleveBySession(entity: Session){

    this.crudservice.findAllEleveBySession(this.ojetUrlEleve,entity.id)
    .subscribe( data => {
     this.dataToExcel=[];
     this.dataToExcel=data.result;
      if(data.result){
        setTimeout(() => {
          this.fileName=" الدورة"+entity.numSession+" .xlsx";
          console.log(this.dataToExcel);
          let element :HTMLElement=document.getElementById('mybutton') as HTMLElement;
          element.click();
        }, 1000);

    }

      //this.entities = this.entities.filter(u => u !== entity);
    // this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});

    })
  }
  delete(entity: Session): void {
    this.crudservice.deleteLigne(this.ojetUrl,entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});

      })
  };

  edit(entity: Session): void {
    window.localStorage.removeItem("editSessiontId");

    window.localStorage.setItem("editSessiontId", entity.id.toString());
    this.router.navigate(['enpr/edit-session']);
  };

  addConge(): void {
    this.router.navigate(['enpr/add-session']);
  };
}
