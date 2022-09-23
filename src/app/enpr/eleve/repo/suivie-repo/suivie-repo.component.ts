
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService, SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';

import { Penalite } from '../../../domain/penalite';
import { CrudGlobalService } from '../../../crud-global.service';
import { VaccinEleve } from '../../../domain/vaccin-eleve';
import { TokenStorageService } from '../../../../_services/token-storage.service';
@Component({
  selector: 'app-suivie-repo',
  templateUrl: './suivie-repo.component.html',
  styleUrls: ['./suivie-repo.component.scss']
})
export class SuivieRepoComponent implements OnInit {
  currentUserRole: any;
  @Input() idEleve: any;
  @Input() tabclickedMedicale: boolean=false;
  addForm : FormGroup;
  msgs: Message[] = [];
  medicale: SelectItem[];
  entities: VaccinEleve[];
  ojetUrl: string = 'repoeleve';
  ojetUrlMedicale: string = 'medicale';
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
        medicale: ['', Validators.required],
        dateDebutRepo: ['', Validators.required],
        dateFinRepo: ['', Validators.required],


       });
      this.chargerVaccin();

    }
    onSubmit(repoeleve: any) {
      console.log('ok');
      console.log(repoeleve);
      repoeleve.eleve = this.idEleve;

      this.crudservice.createLigne(this.ojetUrl, repoeleve)
        .subscribe( data => {
          this.crudservice.findAllSonByMother(this.ojetUrl, this.idEleve)
    .subscribe( data => {
        this.entities = data.result;
      });
        });
        this.addForm.reset();
    }


  chargerVaccin() {
    this.crudservice.getlistEntity(this.ojetUrlMedicale).subscribe(data => {

      this.medicale = [];

      data.result.forEach((medicale: any, value: any) => {
      console.log(data.result);
        this.medicale.push({ label: medicale.nomMedicale, value: medicale });
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
