import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';

@Component({
  selector: 'app-add-personelle',
  templateUrl: './add-personelle.component.html',
  styleUrls: ['./add-personelle.component.scss']
})
export class AddPersonelleComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'personelle';
  clicked: any;

    ngOnInit() {
      this.clicked = false;
      this.addForm = this.formBuilder.group({
        id: [],
        matricule: ['', Validators.required],
        cnrps: ['', Validators.required],
        prenom: ['', Validators.required],
        nom: ['', Validators.required],
        nom_pere: ['', Validators.required],
        date_retraite: ['', Validators.required],
      });
    }
    onSubmit() {
      this.clicked = true;
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-personelle']);
        });
    }

}