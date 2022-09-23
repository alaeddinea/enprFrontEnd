import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';


@Component({
  selector: 'app-add-fonction',
  templateUrl: './add-fonction.component.html',
  styleUrls: ['./add-fonction.component.scss']
})
export class AddFonctionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addFormFonction: FormGroup;

  ojetUrl: string = 'fonction';
  ngOnInit() {
    this.addFormFonction = this.formBuilder.group({
     id: [],

      libelle_fonction: ['', Validators.required],
     });
  }
  onSubmit() {
    this.crudservice.createLigne(this.ojetUrl,this.addFormFonction.value)
      .subscribe( data => {
        this.router.navigate(['enpr/list-fonction']);
      });
  }

}
