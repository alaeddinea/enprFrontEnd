
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Salle } from '../../domain/salle';
import { LoginComponent } from '../../../login/login.component';
import { TokenStorageService } from '../../../_services/token-storage.service';
import { Specialite } from '../../domain/specialite';

@Component({
  selector: 'app-list-specialite',
  templateUrl: './list-specialite.component.html',
  styleUrls: ['./list-specialite.component.scss']
})
export class ListSpecialiteComponent implements OnInit {
  currentUserRole: any;
  msgs: Message[] = [];

  entities: Specialite[];
  ojetUrl: string = 'specialite';
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;
      });
  }

  delete(entity: Specialite): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Row Deleted Success.'});
       });
  }

  edit(entity: Specialite): void {
    window.localStorage.removeItem('editSpecialiteId');

    window.localStorage.setItem('editSpecialiteId', entity.id.toString());
    this.router.navigate(['enpr/edit-specialite']);
  }

  addConge(): void {
    this.router.navigate(['enpr/add-specialite']);
  }
}
