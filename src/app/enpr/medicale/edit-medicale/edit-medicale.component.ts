import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
@Component({
  selector: 'app-edit-medicale',
  templateUrl: './edit-medicale.component.html',
  styleUrls: ['./edit-medicale.component.scss']
})
export class EditMedicaleComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm : FormGroup;
  ojetUrl: string = 'medicale';


    ngOnInit() {
      let entityId = window.localStorage.getItem("editMedicaleId");
      if(!entityId) {
      
        this.router.navigate(['list-medicale']);
        return;
    }
      this.addForm = this.formBuilder.group({
        id: [],
        nomMedicale: ['', Validators.required],
       
       });
   
    this.crudservice.getLigneById(this.ojetUrl,entityId)
    .subscribe( data => {
      this.addForm.setValue(data.result);
    });
}
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-medicale']);
        });
    }
  
  }