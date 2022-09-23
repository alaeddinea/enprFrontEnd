
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Testpsy } from '../../domain/testpsy';
import { TokenStorageService } from '../../../_services/token-storage.service';
@Component({
  selector: 'app-list-testpsy',
  templateUrl: './list-testpsy.component.html',
  styleUrls: ['./list-testpsy.component.scss']
})
export class ListTestpsyComponent implements OnInit {
  msgs: Message[] = [];
  currentUserRole: any;
  entities: Testpsy[];
  ojetUrl: string = 'testpsy';
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;
      });
  }

  delete(entity: Testpsy): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Row Deleted Success.'});
       });
  }

  edit(entity: Testpsy): void {
    window.localStorage.removeItem('editTestpsyId');

    window.localStorage.setItem('editTestpsyId', entity.id.toString());
    this.router.navigate(['enpr/edit-testpsy']);
  }

  addConge(): void {
    this.router.navigate(['enpr/add-testpsy']);
  }
}
