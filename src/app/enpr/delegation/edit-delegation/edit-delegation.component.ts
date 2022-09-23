import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

import { Delegation } from '../../domain/delegation';
import { Gouvernorat } from '../../domain/gouvernorat';
@Component({
  selector: 'app-edit-delegation',
  templateUrl: './edit-delegation.component.html',
  styleUrls: ['./edit-delegation.component.scss']
})
export class EditDelegationComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  gouvernorat:Gouvernorat;
  id:any;
  ojetUrl: string = 'delegation';
  ojetUrlGouvernorat: string = 'gouvernorat';
  ngOnInit() {
    console.log("aaaaaaaaaa");
    let entityGouvId = window.localStorage.getItem("GouvernoratId");
    let entityId = window.localStorage.getItem("editDelegationId");
    if(!entityId) {
    
      this.router.navigate(['list-delegation']);
      return;
  }
    if(!entityGouvId) {
    
      this.router.navigate(['list-delegation']);
      return;
  }
  
    this.addForm = this.formBuilder.group({
      id: [],
      libelle_delegation: ['', Validators.required],
      gouvernorat: ['', Validators.required],
    });
    this.crudservice.getLigneById(this.ojetUrl,entityId)
    .subscribe( data => {
      this.addForm.setValue(data.result);
    });
//get gouvernorat
this.crudservice.getLigneById(this.ojetUrlGouvernorat,entityGouvId)
.subscribe( data => {
  //this.addForm.setValue(data.result); get gouvernorat
  this.gouvernorat= data.result;

  this.addForm.get('gouvernorat').setValue(this.gouvernorat);
});
//get gouvernorat
  }

  onSubmit(delegation :Delegation) {
// delegation.gouvernorat.id=this.id;
    this.crudservice.createLigne(this.ojetUrl, delegation)
      .subscribe(data => {
        this.router.navigate(['enpr/list-delegation']);
      });
  }


}