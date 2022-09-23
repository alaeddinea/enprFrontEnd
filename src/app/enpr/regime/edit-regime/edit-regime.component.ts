import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-regime',
  templateUrl: './edit-regime.component.html',
  styleUrls: ['./edit-regime.component.scss']
})
export class EditRegimeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'regime';


    ngOnInit() {
      let entityId = window.localStorage.getItem('editRegimeId');
      if (!entityId) {

        this.router.navigate(['list-regime']);
        return;
    }
      this.addForm = this.formBuilder.group({
        id: [],
        nomRegime: ['', Validators.required],
  });

    this.crudservice.getLigneById(this.ojetUrl, entityId)
    .subscribe( data => {
      this.addForm.setValue(data.result);
    });
}
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-regime']);
        });
    }

  }
