
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Regime } from '../../domain/regime';

@Component({
  selector: 'app-list-regime',
  templateUrl: './list-regime.component.html',
  styleUrls: ['./list-regime.component.scss']
})
export class ListRegimeComponent implements OnInit {
  msgs: Message[] = [];

  entities: Regime[];
  ojetUrl: string = 'regime';
  constructor(private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;
      });
  }

  delete(entity: Regime): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Row Deleted Success.'});
       });
  }

  edit(entity: Regime): void {
    window.localStorage.removeItem('editRegimeId');

    window.localStorage.setItem('editRegimeId', entity.id.toString());
    this.router.navigate(['enpr/edit-regime']);
  }

  addConge(): void {
    this.router.navigate(['enpr/add-regime']);
  }
}
