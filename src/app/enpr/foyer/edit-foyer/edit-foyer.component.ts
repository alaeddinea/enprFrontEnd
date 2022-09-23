import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-foyer',
  templateUrl: './edit-foyer.component.html',
  styleUrls: ['./edit-foyer.component.scss']
})
export class EditFoyerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'foyer';


    ngOnInit() {
      let entityId = window.localStorage.getItem('editFoyerId');
      if (!entityId) {

        this.router.navigate(['list-foyer']);
        return;
    }
      this.addForm = this.formBuilder.group({
        id: [],
        nomFoyer: ['', Validators.required],
        capaciteFoyer: ['', Validators.required],
  });

    this.crudservice.getLigneById(this.ojetUrl, entityId)
    .subscribe( data => {
      this.addForm.setValue(data.result);
    });
}
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-foyer']);
        });
    }

  }
