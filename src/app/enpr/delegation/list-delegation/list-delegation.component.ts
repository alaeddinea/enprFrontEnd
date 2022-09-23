import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';

import { Gouvernorat } from '../../domain/gouvernorat';
import { Delegation } from '../../domain/delegation';


@Component({
  selector: 'app-list-delegation',
  templateUrl: './list-delegation.component.html',
  styleUrls: ['./list-delegation.component.scss']
})
export class ListDelegationComponent implements OnInit {
  msgs: Message[] = [];
  gouvernorat = Gouvernorat;
  entities: Array<Delegation> = [];
  ojetUrl: string = 'delegation';
  ojetUrlGouvernorat: string = 'gouvernorat';
  constructor(private router: Router, private crudservice: CrudGlobalService, private messageService: MessageService) { }

  ngOnInit() {
    let entityId = window.localStorage.getItem("GouvernoratId");
    if (!entityId) {

      this.router.navigate(['list-gouvernorat']);
      return;
    }
    //get gouvernorat
    this.crudservice.getLigneById(this.ojetUrlGouvernorat, entityId)
      .subscribe(data => {
        //this.addForm.setValue(data.result); get gouvernorat
        this.gouvernorat = data.result;
      });
    //get gouvernorat

    this.crudservice.findAllSonByMother(this.ojetUrl,entityId)
      .subscribe(data => {
        data.result.forEach((delegation: any, value: any) => {
            this.entities.push(delegation);
        }
        );
      });
  }

  delete(entity: Delegation): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.id)
      .subscribe(data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Row Deleted Success.' });

      })
  };

  edit(entity: Delegation): void {
  

    window.localStorage.setItem("editDelegationId", entity.id.toString());

    this.router.navigate(['enpr/edit-delegation']);
  };

  addConge(): void {
    this.router.navigate(['enpr/add-delegation']);
  };

}