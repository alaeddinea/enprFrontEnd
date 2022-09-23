
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Vaccin } from '../../domain/vaccin';
@Component({
  selector: 'app-list-vaccin',
  templateUrl: './list-vaccin.component.html',
  styleUrls: ['./list-vaccin.component.scss']
})
export class ListVaccinComponent implements OnInit {

  msgs: Message[] = [];

  entities:Vaccin[];
  ojetUrl: string = 'vaccin';
  constructor(private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;
      });
  }

  delete(entity: Vaccin): void {
    this.crudservice.deleteLigne(this.ojetUrl,entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});
        
      })
  };

  edit(entity: Vaccin): void {
    window.localStorage.removeItem("editVaccinId");

    window.localStorage.setItem("editVaccinId", entity.id.toString());
    this.router.navigate(['enpr/edit-vaccin']);
  };

  addConge(): void {
    this.router.navigate(['enpr/add-vaccin']);
  };
}