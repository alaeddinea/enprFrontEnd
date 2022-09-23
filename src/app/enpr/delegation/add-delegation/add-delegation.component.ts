import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

import { Delegation } from '../../domain/delegation';
import { Gouvernorat } from '../../domain/gouvernorat';
@Component({
  selector: 'app-add-delegation',
  templateUrl: './add-delegation.component.html',
  styleUrls: ['./add-delegation.component.scss']
})
export class AddDelegationComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  gouvernorat:Gouvernorat;
  id:any;
  ojetUrl: string = 'delegation';
  ojetUrlGouvernorat: string = 'gouvernorat';
  ngOnInit() {
    let entityId = window.localStorage.getItem("GouvernoratId");
    if(!entityId) {
    
      this.router.navigate(['list-gouvernorat']);
      return;
  }
  
    this.addForm = this.formBuilder.group({
      id: [],
      libelle_delegation: ['', Validators.required],
    
      gouvernorat: ['', Validators.required],
    });

//get gouvernorat
this.crudservice.getLigneById(this.ojetUrlGouvernorat,entityId)
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