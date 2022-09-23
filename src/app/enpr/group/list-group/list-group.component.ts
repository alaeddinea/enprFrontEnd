import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Group } from '../../domain/group';
import { LoginComponent } from '../../../login/login.component';
import { TokenStorageService } from '../../../_services/token-storage.service';


@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {
  currentUserRole: any;
  selectedSex: any;

  ojetUrlEleve: string = 'eleve';
  public dataToExcel: any[];
public fileName: any;
  msgs: Message[] = [];

  entities: Group[];
  ojetUrl: string = 'group';
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;

      });
  }
  getAllEleveByGroup(entity: Group){

    this.crudservice.findAllEleveByGroup(this.ojetUrlEleve,entity.id)
    .subscribe( data => {
     this.dataToExcel = [];
        if (this.selectedSex === '0') {
          this.dataToExcel = data.result.filter( u => u.sexeEl === this.selectedSex );
        } else  if (this.selectedSex === '1') {
          this.dataToExcel = data.result.filter( u => u.sexeEl === this.selectedSex );
        } else{
          this.dataToExcel = data.result;
        }
      if (data.result) {
        setTimeout(() => {
          this.fileName="  :الفوج  "+ entity.nomGroup +" الدورة"+entity.session.numSession+" .xlsx";
          console.log(this.dataToExcel);
          let element :HTMLElement=document.getElementById('mybutton') as HTMLElement;
          element.click();
        }, 1000);

    }

      //this.entities = this.entities.filter(u => u !== entity);
    // this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});

    })
  }
  delete(entity: Group): void {
    this.crudservice.deleteLigne(this.ojetUrl,entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});

      })
  };

  edit(entity: Group): void {
    window.localStorage.removeItem("editGrouptId");

    window.localStorage.setItem("editGrouptId", entity.id.toString());
    this.router.navigate(['enpr/edit-group']);
  };

  addConge(): void {
    this.router.navigate(['enpr/add-group']);
  };
}
