import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
@Component({
  selector: 'app-add-penalite',
  templateUrl: './add-penalite.component.html',
  styleUrls: ['./add-penalite.component.scss']
})
export class AddPenaliteComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm : FormGroup;
  ojetUrl: string = 'penalite';
  typePenalite: SelectItem[];


    ngOnInit() {
      this.addForm = this.formBuilder.group({
        id: [],
        nomPenalite: ['', Validators.required],
        typePenalite: ['', Validators.required],
       });
       this.typePenalite =[];
       this.typePenalite = [
        {label:'إختيار درجة', value:null},
        {label:'عقوبة من الدرجة الأولة', value:"عقوبة من الدرجة الأولة"},
        {label:'عقوبة من الدرجة الثانية', value:"عقوبة من الدرجة الثانية"},
        {label:'عقوبة من الدرجة الثالثة', value:"عقوبة من الدرجة الثالثة"},

    ];
    }
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-penalite']);
        });
    }

}
