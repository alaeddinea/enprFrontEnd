import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-edit-gouvernorat',
  templateUrl: './edit-gouvernorat.component.html',
  styleUrls: ['./edit-gouvernorat.component.scss']
})
export class EditGouvernoratComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'gouvernorat';

  ngOnInit() {
    let entityId = window.localStorage.getItem("GouvernoratId");
    if(!entityId) {
    
      this.router.navigate(['list-gouvernorat']);
      return;
  }
    this.addForm = this.formBuilder.group({
      id: [],
      libelle_gouvernorat: ['', Validators.required],
      
    
    });
    this.crudservice.getLigneById(this.ojetUrl,entityId)
    .subscribe( data => {
      this.addForm.setValue(data.result);
    });
   
  }
  onSubmit() {
 
    this.crudservice.createLigne(this.ojetUrl, this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['enpr/list-gouvernorat']);
      });
  }


}