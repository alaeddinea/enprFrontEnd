import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
@Component({
  selector: 'app-edit-vaccin',
  templateUrl: './edit-vaccin.component.html',
  styleUrls: ['./edit-vaccin.component.scss']
})
export class EditVaccinComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm : FormGroup;
  ojetUrl: string = 'vaccin';


    ngOnInit() {
      let entityId = window.localStorage.getItem("editVaccinId");
      if(!entityId) {
      
        this.router.navigate(['list-vaccin']);
        return;
    }
      this.addForm = this.formBuilder.group({
        id: [],
        nomVaccin: ['', Validators.required],
       
       });
   
    this.crudservice.getLigneById(this.ojetUrl,entityId)
    .subscribe( data => {
      this.addForm.setValue(data.result);
    });
}
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-vaccin']);
        });
    }
  
  }
