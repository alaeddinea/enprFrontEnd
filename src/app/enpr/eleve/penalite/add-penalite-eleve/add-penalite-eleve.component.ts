import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { CrudGlobalService } from '../../../crud-global.service';
import { PenaliteEleve } from '../../../domain/penalite-eleve';
import { LoginComponent } from '../../../../login/login.component';
@Component({

  selector: 'app-add-penalite-eleve',
  templateUrl: './add-penalite-eleve.component.html',
  styleUrls: ['./add-penalite-eleve.component.scss']
})
export class AddPenaliteEleveComponent implements OnInit {
    currentUserRole: any ;
  addForm : FormGroup;
  ojetUrl: string = 'penaliteeleve';
  ojetUrlPenalite: string = 'penalite';
  penalite: SelectItem[];
  @Input() idEleve:any;
  @Output() buttonSubmit = new EventEmitter();

  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }


    ngOnInit() {
      
      this.addForm = this.formBuilder.group({
        id: [],
        penalite: ['', Validators.required],
        dateDebutPenalite: ['', Validators.required],
        dateFinPenalite: ['', Validators.required],

       });
      this.chargerPenalite();

    }
    onSubmit(penaliteeleve :PenaliteEleve) {
      penaliteeleve.eleve=this.idEleve;

      this.crudservice.createLigne(this.ojetUrl, penaliteeleve)
        .subscribe( data => {
          this.router.navigate(['enpr/details-eleve']);
        });
        this.addForm.reset();
        this.buttonSubmit.emit(penaliteeleve);
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
