import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { first } from 'rxjs/operators';
import { SelectItem } from 'primeng/primeng';
import { Session } from '../../domain/session';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.scss']
})
export class EditSessionComponent implements OnInit {
  sessionGet: Session;
  dtOvSessionEleve: any;
  dtFrSessionEleve: any;
  entity: Session;
  addForm: FormGroup;
  ojetUrl: string = 'session';
  etatSession: SelectItem[];

  // tslint:disable-next-line:max-line-length
  constructor(private datePipe: DatePipe, private formBuilder: FormBuilder,private router: Router, private crudService: CrudGlobalService) { }

    ngOnInit() {
      let entityId = window.localStorage.getItem("editSessiontId");
      if(!entityId) {

        this.router.navigate(['list-session']);
        return;
    }
    this.addForm = this.formBuilder.group({
      id: [],
      numSession: ['', Validators.required],
      nomSession: ['', Validators.required],
      etatSession: ['', Validators.required],
      dtOvSession: ['', Validators.required],
      dtFrSession: ['', Validators.required],
     });
     this.etatSession =[];
     this.etatSession = [
      {label:'إختيار الحالة', value:null},
      {label:'مفعل', value:"مفعل"},
      {label:'إنتهاء', value:"إنتهاء"},

  ];
     this.crudService.getLigneById(this.ojetUrl,entityId)
       .subscribe( data => {
         this.addForm.setValue(data.result);
         this.sessionGet = data.result;
         this.dtOvSessionEleve = this.datePipe.transform(new Date(this.sessionGet.dtOvSession), 'yyyy-MM-dd');
         this.dtFrSessionEleve = this.datePipe.transform(new Date(this.sessionGet.dtFrSession), 'yyyy-MM-dd');
       });
   }

   onSubmit() {
     this.crudService.updateLigne(this.ojetUrl,this.addForm.value)
       .pipe(first())
       .subscribe(
         data => {
           if(data.status === 200) {

             this.router.navigate(['enpr/list-session']);
           }else {
             alert(data.message);
           }
         },
         error => {
           alert(error);
         });
   }

  }
