
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Foyer } from '../../domain/foyer';
import { LoginComponent } from '../../../login/login.component';
import { TokenStorageService } from '../../../_services/token-storage.service';

@Component({
  selector: 'app-list-foyer',
  templateUrl: './list-foyer.component.html',
  styleUrls: ['./list-foyer.component.scss']
})
export class ListFoyerComponent implements OnInit {
  currentUserRole: any;
  msgs: Message[] = [];

  entities: Foyer[];
  ojetUrl: string = 'foyer';
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;
      });
  }

  delete(entity: Foyer): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Row Deleted Success.'});
       });
  }

  edit(entity: Foyer): void {
    window.localStorage.removeItem('editFoyerId');

    window.localStorage.setItem('editFoyerId', entity.id.toString());
    this.router.navigate(['enpr/edit-foyer']);
  }

  addConge(): void {
    this.router.navigate(['enpr/add-foyer']);
  }
}
