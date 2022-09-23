import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-etatcivil',
  templateUrl: './add-etatcivil.component.html',
  styleUrls: ['./add-etatcivil.component.scss']
})
export class AddEtatcivilComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'etatcivil';


    ngOnInit() {
      this.addForm = this.formBuilder.group({
        id: [],
        code_etatcivil: ['', Validators.required],
        libelle_etatcivil: ['', Validators.required],
       });
    }
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-etatcivil']);
        });
    }

}