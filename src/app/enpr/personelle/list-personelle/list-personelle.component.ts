import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Personelle } from '../../domain/personelle';



@Component({
  selector: 'app-list-personelle',
  templateUrl: './list-personelle.component.html',
  styleUrls: ['./list-personelle.component.scss']
})
export class ListPersonelleComponent implements OnInit {

  msgs: Message[] = [];

  entities: Personelle[];
  ojetUrl: string = 'personelle';
  bodyTableExport: any;



  constructor(private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;
        console.log("this.entities");
        console.log(this.entities);

      });
  }

  delete(entity: Personelle): void {
    this.crudservice.deleteLigne(this.ojetUrl,entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});

      })
  };

  edit(entity: Personelle): void {
    window.localStorage.removeItem("editPersonelleId");

    window.localStorage.setItem("editPersonelleId", entity.id.toString());
    this.router.navigate(['enpr/edit-personelle']);
  };

  addConge(): void {
    this.router.navigate(['enpr/add-personelle']);
  };



detailsEleve(entity: Personelle){
  window.localStorage.removeItem("detalPersonelleId");
  window.localStorage.setItem("detalPersonelleId", entity.id.toString());
  this.router.navigate(['enpr/details-personelle']);
}
}
