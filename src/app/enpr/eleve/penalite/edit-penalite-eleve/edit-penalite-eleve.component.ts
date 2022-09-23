import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { CrudGlobalService } from '../../../crud-global.service';
import { PenaliteEleve } from '../../../domain/penalite-eleve';
@Component({
  selector: 'app-edit-penalite-eleve',
  templateUrl: './edit-penalite-eleve.component.html',
  styleUrls: ['./edit-penalite-eleve.component.scss']
})
export class EditPenaliteEleveComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm : FormGroup;
  ojetUrl: string = 'penaliteeleve';
  ojetUrlPenalite: string = 'penalite';
  penalite: SelectItem[];

    ngOnInit() {
      let entityId = window.localStorage.getItem("editPenaliteId");
      if(!entityId) {
      
        this.router.navigate(['list-penalite-eleve']);
        return;
    }
    this.addForm = this.formBuilder.group({
      id: [],
      penalite: ['', Validators.required],
      dateDebutPenalite: ['', Validators.required],
      dateFinPenalite: ['', Validators.required],

     });
    this.chargerPenalite();

    this.crudservice.getLigneById(this.ojetUrl,entityId)
    .subscribe( data => {
      this.addForm.setValue(data.result);
    });
}
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/details-eleve']);
        });
    }
  
    
    chargerPenalite() {
      this.crudservice.getlistEntity(this.ojetUrlPenalite).subscribe(data => {
  
        this.penalite = [];
        
        data.result.forEach((penalite: any, value: any) => {
        console.log(data.result);
          this.penalite.push({ label: penalite.nomPenalite, value: penalite });
        });
         
      });
    }
  }