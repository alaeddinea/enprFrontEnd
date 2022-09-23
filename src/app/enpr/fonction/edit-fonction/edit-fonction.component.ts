import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { CrudGlobalService } from '../../crud-global.service';
import { Fonction } from '../../domain/fonction';

@Component({
  selector: 'app-edit-fonction',
  templateUrl: './edit-fonction.component.html',
  styleUrls: ['./edit-fonction.component.scss']
})
export class EditFonctionComponent implements OnInit {
entity: Fonction;
editForm: FormGroup;
ojetUrl: string = 'fonction';
constructor(private formBuilder: FormBuilder,private router: Router, private crudService: CrudGlobalService) { }

  ngOnInit() {
    let entityId = window.localStorage.getItem("editFonctionId");
    if(!entityId) {

      this.router.navigate(['list-fonction']);
      return;
  }
  this.editForm = this.formBuilder.group({
    id: [ ],

     libelle_fonction: ['', Validators.required],
   });
   this.crudService.getLigneById(this.ojetUrl, entityId)
     .subscribe( data => {

       this.editForm.setValue(data.result);
     });
 }

 onSubmit() {
   this.crudService.updateLigne(this.ojetUrl,this.editForm.value)
     .pipe(first())
     .subscribe(
       data => {
         if(data.status === 200) {

           this.router.navigate(['enpr/list-fonction']);
         }else {
           alert(data.message);
         }
       },
       error => {
         alert(error);
       });
 }

}
