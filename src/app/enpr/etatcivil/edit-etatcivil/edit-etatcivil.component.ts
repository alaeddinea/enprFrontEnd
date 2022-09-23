import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-etatcivil',
  templateUrl: './edit-etatcivil.component.html',
  styleUrls: ['./edit-etatcivil.component.scss']
})
export class EditEtatcivilComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'etatcivil';


    ngOnInit() {
      let entityId = window.localStorage.getItem('editEtatcivilId');
      if (!entityId) {

        this.router.navigate(['list-etatcivil']);
        return;
    }
      this.addForm = this.formBuilder.group({
        id: [],
        code_etatcivil: ['', Validators.required],
        libelle_etatcivil: ['', Validators.required],
  });

    this.crudservice.getLigneById(this.ojetUrl, entityId)
    .subscribe( data => {
      this.addForm.setValue(data.result);
    });
}
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-etatcivil']);
        });
    }

  }
