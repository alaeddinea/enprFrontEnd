import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Grade } from '../../domain/grade';
import { LoginComponent } from '../../../login/login.component';
import { TokenStorageService } from '../../../_services/token-storage.service';


@Component({
  selector: 'app-list-grade',
  templateUrl: './list-grade.component.html',
  styleUrls: ['./list-grade.component.scss']
})
export class ListGradeComponent implements OnInit {
  currentUserRole: any;
  
  msgs: Message[] = [];

  entities:Grade[];
  ojetUrl: string = 'grade';
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;
      });
  }

  delete(entity: Grade): void {
    this.crudservice.deleteLigne(this.ojetUrl,entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});
      })
  };

  edit(entity: Grade): void {
    window.localStorage.removeItem("editGradeId");

    window.localStorage.setItem("editGradeId", entity.id.toString());
    this.router.navigate(['enpr/edit-grade']);
  };

  addConge(): void {
    this.router.navigate(['enpr/add-grade']);
  };
}