import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { ElvPreselection } from '../../domain/elv-preselection';
import { getHeapCodeStatistics } from 'v8';
import { Eleve } from '../../domain/eleve';
import { DatePipe } from '@angular/common';
import { LoginComponent } from '../../../login/login.component';
import { TokenStorageService } from '../../../_services/token-storage.service';

@Component({
  selector: 'app-list-elv-pre-selection',
  templateUrl: './list-elv-pre-selection.component.html',
  styleUrls: ['./list-elv-pre-selection.component.scss']
})
export class ListElvPreSelectionComponent implements OnInit {
  dateConvocationSerch: any = '' ;
  currentUserRole: any;
  validateDate: boolean ;
  public dataToExcel: any[];
  public fileName: any;
  public dataToExcelRestTotal: any[];
  todayDate: any = Date.now();
  dtEnter: any;
  dtdy: any;
  msgs: Message[] = [];

  entities: ElvPreselection[];
  auxEntites: ElvPreselection[];
  ojetUrl: string = 'elvpreselection';
  ojetUrlElve: String = 'eleve';
  countFortoday: any = 0;
  countForGirl: any = 0;
  countForBoy: any = 0;
  countForALLaccepted: any = 0;
  countTotalRest: any = 0;
  // tslint:disable-next-line:max-line-length
  constructor( private datePipe: DatePipe, private router: Router, private tokenStorageService: TokenStorageService, private token: TokenStorageService, private crudservice: CrudGlobalService, private messageService: MessageService) { }
  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    console.log(this.currentUserRole);
    this.crudservice.getlistEntity(this.ojetUrl)
      .subscribe(data => {
        this.entities = data.result;
        this.auxEntites = data.result;
        this.countTotalRest = data.result.length ;
        console.log(this.entities);
      });
    this.allStatistic();
  }
  allStatistic() {
    this.countFortoday = 0;
    this.countForALLaccepted = 0;
    this.countForGirl = 0;
    this.countForBoy = 0;
    this.dataToExcelRestTotal = [];
    this.crudservice.findAllEleveBySession(this.ojetUrlElve,300)
      .subscribe(data => {
        if (data.result != null) {
          this.dataToExcelRestTotal = data.result;
          this.dtdy = new Date(this.todayDate);
          data.result.forEach((eleve: Eleve, value: any) => {
            this.countForALLaccepted += 1;
            this.dtEnter = new Date(eleve.datenterEl);
            if (this.datePipe.transform(this.dtEnter, 'yyyy-MM-dd') === this.datePipe.transform(this.todayDate, 'yyyy-MM-dd')) {
              if (eleve.sexeEl === '1') {
                this.countForGirl += 1;
              }
              this.countFortoday += 1;
            }
          });
          this.countForBoy = this.countFortoday - this.countForGirl;
        }
      });
  }


  accepter(entity: ElvPreselection) {
    window.localStorage.removeItem('acptElvPreselectionNumD');
    window.localStorage.setItem('acptElvPreselectionNumD', entity.numdossier.toString());
    this.router.navigate(['enpr/accept-elvpreselection']);
  }
  /* delete(entity: ElvPreselection): void {
     this.crudservice.deleteLigne(this.ojetUrl, entity.id)
       .subscribe( data => {
 
         this.entities = this.entities.filter(u => u !== entity);
         this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Row Deleted Success.'});
        });
   }
 
   edit(entity: ElvPreselection): void {
     window.localStorage.removeItem('editAdministrationId');
 
     window.localStorage.setItem('editAdministrationId', entity.id.toString());
     this.router.navigate(['enpr/edit-administration']);
   }
 
  
   addConge(): void {
     this.router.navigate(['enpr/add-administration']);
   }*/
   getAllEleveRetardPreselection() {
    this.dataToExcel = [];
    this.dataToExcel = this.entities;
    if ( this.dataToExcel) {
      setTimeout(() => {
        this.fileName = '' + this.dateConvocationSerch + 'قائمة المتخلفين عن الحضور بتاريخ .xlsx';
        console.log(this.dataToExcel);
        const element: HTMLElement = document.getElementById('mybutton') as HTMLElement;
        element.click();
      }, 1000);
    }
  /*  this.crudservice.getlistEntity(this.ojetUrl)
    .subscribe(data => {
      
      data.result.forEach((eleve: ElvPreselection, value: any) => {
        const dtdy = new Date(this.todayDate) ;
    const dtconv = new Date(eleve.dateconv);
    this.validateDate = dtconv <= dtdy;
           if (this.validateDate === true) {
           this.dataToExcel.push(eleve);
        }
       });

      if (data.result) {
        setTimeout(() => {
          this.fileName = 'قائمة المتخلفين عن الحضور.xlsx';
          console.log(this.dataToExcel);
          const element: HTMLElement = document.getElementById('mybutton') as HTMLElement;
          element.click();
        }, 1000);

    }
    });*/
   }
   getAllEleveRetardPreselectionTotal() {
    setTimeout(() => {
      this.fileName = 'قائمة المتبقين.xlsx';
      const element: HTMLElement = document.getElementById('mybuttonRestTotal') as HTMLElement;
      element.click();
    }, 1000);

   }
   filterByDate(inputDate: Date) {
     this.dateConvocationSerch = this.datePipe.transform(new Date(inputDate), 'yyyy-MM-dd');
    this.entities = [];
this.auxEntites.forEach((eleve: ElvPreselection, value: any) => {
 // let dtdy = new Date(inputDate);
  //let dtconv = new Date(eleve.dateconv);
 // alert(dtdy + ' vs ' + dtconv);
  //this.validateDate = ( dtconv === dtdy );
 // console.log(dtconv + ' vs ' + dtdy);
  if (this.datePipe.transform(new Date(eleve.dateconv), 'yyyy-MM-dd') === this.datePipe.transform(new Date(inputDate), 'yyyy-MM-dd')) {
          
           this.entities.push(eleve);
         }
});
     //alert(inputDate);
   }
}
