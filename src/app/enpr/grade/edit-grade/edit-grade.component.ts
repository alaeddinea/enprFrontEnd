import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
@Component({
  selector: 'app-edit-grade',
  templateUrl: './edit-grade.component.html',
  styleUrls: ['./edit-grade.component.scss']
})
export class EditGradeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm : FormGroup;
  ojetUrl: string = 'grade';
  categorieGrade: SelectItem[];

    ngOnInit() {
      let entityId = window.localStorage.getItem("editGradeId");
      if(!entityId) {
      
        this.router.navigate(['list-grade']);
        return;
    }
      this.addForm = this.formBuilder.group({
        id: [],
        libelle_grade: ['', Validators.required],
        categorieGrade: ['', Validators.required],
  
       });
       this.categorieGrade =[];
       this.categorieGrade = [
        {label:'إختيار الهيأة', value:null},
        {label:'مدني', value:"مدني"},
        {label:'نظامي', value:"نظامي"},
        
    ];
    this.crudservice.getLigneById(this.ojetUrl,entityId)
    .subscribe( data => {
      this.addForm.setValue(data.result);
    });
}
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-grade']);
        });
    }
  
  }