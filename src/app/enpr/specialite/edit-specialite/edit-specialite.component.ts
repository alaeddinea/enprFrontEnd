import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-specialite',
  templateUrl: './edit-specialite.component.html',
  styleUrls: ['./edit-specialite.component.scss']
})
export class EditSpecialiteComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'specialite';


    ngOnInit() {
      let entityId = window.localStorage.getItem('editSpecialiteId');
      if (!entityId) {

        this.router.navigate(['list-specialite']);
        return;
    }
      this.addForm = this.formBuilder.group({
        id: [],
        code_specialite: ['', Validators.required],
        libelle_specialite: ['', Validators.required],
  });

    this.crudservice.getLigneById(this.ojetUrl, entityId)
    .subscribe( data => {
      this.addForm.setValue(data.result);
    });
}
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-specialite']);
        });
    }

  }