
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService, SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';

import { Penalite } from '../../../domain/penalite';
import { CrudGlobalService } from '../../../crud-global.service';
import { VaccinEleve } from '../../../domain/vaccin-eleve';
import {LoginComponent } from '../../../../login/login.component';
import { TokenStorageService } from '../../../../_services/token-storage.service';
@Component({
  selector: 'app-suivie-sante',
  templateUrl: './suivie-sante.component.html',
  styleUrls: ['./suivie-sante.component.scss']
})
export class SuivieSanteComponent implements OnInit {
    currentUserRole: any ;

  @Input() idEleve: any;
  @Input() tabclickedMedicale: boolean=false;
  addForm : FormGroup;
  msgs: Message[] = [];
  vaccin: SelectItem[];
  entities: VaccinEleve[];
  ojetUrl: string = 'vaccineleve';
  ojetUrlVaccin: string = 'vaccin';
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService, private messageService: MessageService) { }
  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0]; 
    this.crudservice.findAllSonByMother(this.ojetUrl, this.idEleve)
    .subscribe( data => {
        this.entities = data.result;
      });
      this.addForm = this.formBuilder.group({
        id: [],
        vaccin: ['', Validators.required],
        dateVaccin: ['', Validators.required],


       });
      this.chargerVaccin();

    }
    onSubmit(vaccineleve: any) {
      console.log('ok');
      console.log(vaccineleve);
      vaccineleve.eleve = this.idEleve;

      this.crudservice.createLigne(this.ojetUrl, vaccineleve)
        .subscribe( data => {
          this.crudservice.findAllSonByMother(this.ojetUrl, this.idEleve)
    .subscribe( data => {
        this.entities = data.result;
      });
        });
        this.addForm.reset();
    }


  chargerVaccin() {
    this.crudservice.getlistEntity(this.ojetUrlVaccin).subscribe(data => {

      this.vaccin = [];

      data.result.forEach((vaccin: any, value: any) => {
      console.log(data.result);
        this.vaccin.push({ label: vaccin.nomVaccin, value: vaccin });
      });

    });
  }
delete(entity: VaccinEleve): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Row Deleted Success.'});
       });
  }


}
