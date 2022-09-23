
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Administration } from '../../domain/administration';
@Component({
  selector: 'app-list-administration',
  templateUrl: './list-administration.component.html',
  styleUrls: ['./list-administration.component.scss']
})
export class ListAdministrationComponent implements OnInit {
  msgs: Message[] = [];

  entities: Administration[];
  ojetUrl: string = 'administration';
  constructor(private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;
      });
  }

  delete(entity: Administration): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Row Deleted Success.'});
       });
  }

  edit(entity: Administration): void {
    window.localStorage.removeItem('editAdministrationId');

    window.localStorage.setItem('editAdministrationId', entity.id.toString());
    this.router.navigate(['enpr/edit-administration']);
  }

  addConge(): void {
    this.router.navigate(['enpr/add-administration']);
  }
}
