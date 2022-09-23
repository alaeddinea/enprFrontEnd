import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-add-vaccin',
  templateUrl: './add-vaccin.component.html',
  styleUrls: ['./add-vaccin.component.scss']
})
export class AddVaccinComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm : FormGroup;
  ojetUrl: string = 'vaccin';
  categorieGrade: SelectItem[];

    ngOnInit() {
      this.addForm = this.formBuilder.group({
        id: [],
        nomVaccin: ['', Validators.required],
   });
}
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-vaccin']);
        });
    }}
