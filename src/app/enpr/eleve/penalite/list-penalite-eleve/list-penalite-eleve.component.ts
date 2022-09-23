
import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';

import { Penalite } from '../../../domain/penalite';
import { CrudGlobalService } from '../../../crud-global.service';
import { PenaliteEleve } from '../../../domain/penalite-eleve';
import { LoginComponent } from '../../../../login/login.component';



@Component({
  selector: 'app-list-penalite-eleve',
  templateUrl: './list-penalite-eleve.component.html',
  styleUrls: ['./list-penalite-eleve.component.scss']
})
export class ListPenaliteEleveComponent implements OnInit {
    currentUserRole: any ;
  @Input() tabclicked :boolean=false;
  @Input() idEleve:any;

  msgs: Message[] = [];

  entities:PenaliteEleve[];
  ojetUrl: string = 'penaliteeleve';
  penaliteEleve :PenaliteEleve;
  constructor(private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    
    this.crudservice.findAllSonByMother(this.ojetUrl,this.idEleve)
    .subscribe( data => {
        this.entities = data.result;
      });
  }
  forwardItem(penaliteeleve:any) {
    console.log("idEleve ");
    console.log(this.idEleve);
    setTimeout (() => {
      this.crudservice.findAllSonByMother(this.ojetUrl,this.idEleve)
    .subscribe( data => {
        this.entities = data.result;
        console.log(this.entities);
      });
   }, 1000);
   
    
  }
  delete(entity: PenaliteEleve): void {
    this.crudservice.deleteLigne(this.ojetUrl,entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});
        
      })
  };

  edit(entity: PenaliteEleve): void {
    window.localStorage.removeItem("editPenaliteId");

    window.localStorage.setItem("editPenaliteId", entity.id.toString());
    this.router.navigate(['enpr/edit-penalite-eleve']);
  
  };

  addConge(): void {
    this.router.navigate(['enpr/add-penalite-eleve']);
  };
}