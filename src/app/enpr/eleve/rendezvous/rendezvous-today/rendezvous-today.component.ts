import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Grade } from '../../../domain/grade';
import { TokenStorageService } from '../../../../_services/token-storage.service';
import { CrudGlobalService } from '../../../crud-global.service';
import { RendezvousEleve } from '../../../domain/rendezvouseleve';
import { RendezvousEleveObject } from '../../../domain/rendezvouseleveObject';


@Component({
  selector: 'app-rendezvous-today',
  templateUrl: './rendezvous-today.component.html',
  styleUrls: ['./rendezvous-today.component.scss']
})
export class RendezvousTodayComponent implements OnInit {
  currentUserRole: any;
  dateDebut: Date;
  dateFin: Date;
  
  public dataToExcel: RendezvousEleve[];
  public fileName: any;
  msgs: Message[] = [];

  entities:RendezvousEleve[];
  ojetUrl: string = 'rendezvouseleve';
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private router: Router, private crudservice: CrudGlobalService,private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    /*this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe( data => {
        this.entities = data.result;
        console.log(this.entities);
      });*/
  }

  delete(entity: RendezvousEleve): void {
    this.crudservice.deleteLigne(this.ojetUrl,entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Row Deleted Success.'});
      })
  };

  edit(entity: RendezvousEleve): void {
    window.localStorage.removeItem("editGradeId");

    window.localStorage.setItem("editGradeId", entity.id.toString());
    this.router.navigate(['enpr/edit-grade']);
  };

 exportExcel(){
  if (this.dataToExcel) {
    setTimeout(() => {
      this.fileName = this.dateFin+ "من"+ this.dateDebut + 'قائمة المواعيد إلى .xlsx';
      const element: HTMLElement = document.getElementById('mybutton') as HTMLElement;
      element.click();
    }, 1000);
  }
 }
  listRedezVous(){
    this.crudservice.findAllRendezvousbetween(this.ojetUrl, this.dateDebut,this.dateFin)
      .subscribe(data => {
        this.entities = data.result;
        this.dataToExcel = [];
        this.dataToExcel = data.result;
        console.log(this.dataToExcel);
      this.exportExcel();
      });
  }
}