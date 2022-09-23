import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-specialite',
  templateUrl: './add-specialite.component.html',
  styleUrls: ['./add-specialite.component.scss']
})
export class AddSpecialiteComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'specialite';


    ngOnInit() {
      this.addForm = this.formBuilder.group({
        id: [],
        code_specialite: ['', Validators.required],
        libelle_specialite: ['', Validators.required],
       });
    }
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-specialite']);
        });
    }

}