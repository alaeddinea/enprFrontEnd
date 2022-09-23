import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';

import { Company } from '../../domain/company';
import { LoginComponent } from '../../../login/login.component';
import { TokenStorageService } from '../../../_services/token-storage.service';


@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']
})
export class ListCompanyComponent implements OnInit {  
  selectedSex: any;
    currentUserRole: any ;
  ojetUrlEleve: string = 'eleve';
  public dataToExcel: any[];
public fileName: any;

  msgs: Message[] = [];

  entities: Company[];
  ojetUrl: string = 'company';
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;

      });
  }
  getAllEleveByCompany(entity: Company) {

    this.crudservice.findAllEleveByCompany(this.ojetUrlEleve, entity.id)
    .subscribe( data => {
     this.dataToExcel = [];
     if (this.selectedSex === '0') {
      this.dataToExcel = data.result.filter( u => u.sexeEl === this.selectedSex );
    } else  if (this.selectedSex === '1') {
      this.dataToExcel = data.result.filter( u => u.sexeEl === this.selectedSex );
    } else{
      this.dataToExcel = data.result;
    }
      if (data.result){
        setTimeout(() => {
          this.fileName=" السرية"+ entity.numCompany+"  :الفوج  "+ entity.group.nomGroup +" الدورة"+entity.session.numSession+" .xlsx";
          console.log(this.dataToExcel);
          let element :HTMLElement=document.getElementById('mybutton') as HTMLElement;
          element.click();
        }, 1000);

    }

      //this.entities = this.entities.filter(u => u !== entity);
    // this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});

    })
  }
  delete(entity: Company): void {
    this.crudservice.deleteLigne(this.ojetUrl,entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});

      })
  };

  edit(entity: Company): void {
    window.localStorage.removeItem("editCompanyId");

    window.localStorage.setItem("editCompanyId", entity.id.toString());
    this.router.navigate(['enpr/edit-company']);
  };

  addConge(): void {
    this.router.navigate(['enpr/add-company']);
  };
}
