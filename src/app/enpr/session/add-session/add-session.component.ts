import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm : FormGroup;
  ojetUrl: string = 'session';
  etatSession: SelectItem[];

    ngOnInit() {
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
    
    }
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-session']);
        });
    }
  
  }