import { Component, OnInit } from '@angular/core';

import { Message, MessageService } from 'primeng/primeng';

import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Fonction } from '../../domain/fonction';

@Component({
  selector: 'app-list-fonction',
  templateUrl: './list-fonction.component.html',
  styleUrls: ['./list-fonction.component.scss']
})
export class ListFonctionComponent implements OnInit {
  msgs: Message[] = [];
  entities:Fonction[];
  ojetUrl: string = 'fonction';

  constructor(private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;
      });
  }
  delete(entity: Fonction): void {
    this.crudservice.deleteLigne(this.ojetUrl,entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});
        //this.msgs.push({severity:'info', summary:'Row Deleted', detail:'Success.'});

      })
  };

  edit(entity: Fonction): void {
    window.localStorage.removeItem("editFonctionId");
  //  window.localStorage.setItem("editTypeinterventionId", entity.codeTypeintervention.toString());
    window.localStorage.setItem("editFonctionId", entity.id.toString());
    this.router.navigate(['enpr/edit-fonction']);
  };
  addFonction(): void {
    this.router.navigate(['enpr/add-fonction']);
  };
}
