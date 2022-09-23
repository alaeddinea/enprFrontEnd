import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-administration',
  templateUrl: './edit-administration.component.html',
  styleUrls: ['./edit-administration.component.scss']
})
export class EditAdministrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'administration';


    ngOnInit() {
      let entityId = window.localStorage.getItem('editAdministrationId');
      if (!entityId) {

        this.router.navigate(['list-administration']);
        return;
    }
      this.addForm = this.formBuilder.group({
        id: [],
        nomAdministration: ['', Validators.required],
  });

    this.crudservice.getLigneById(this.ojetUrl, entityId)
    .subscribe( data => {
      this.addForm.setValue(data.result);
    });
}
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-administration']);
        });
    }

  }
