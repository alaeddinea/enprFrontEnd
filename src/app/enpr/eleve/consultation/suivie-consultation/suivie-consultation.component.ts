
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService, SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';

import { Penalite } from '../../../domain/penalite';
import { CrudGlobalService } from '../../../crud-global.service';
import { ConsultationEleve } from '../../../domain/consultation-eleve';
import { LoginComponent } from '../../../../login/login.component';
import { TokenStorageService } from '../../../../_services/token-storage.service';
@Component({
  selector: 'app-suivie-consultation',
  templateUrl: './suivie-consultation.component.html',
  styleUrls: ['./suivie-consultation.component.scss']
})
export class SuivieConsultationComponent implements OnInit {
    currentUserRole: any ;
  @Input() idEleve: any;
  @Input() tabclickedMedicale: boolean=false;
  addForm : FormGroup;
  msgs: Message[] = [];
  typeConsultation: SelectItem[];
  entities: ConsultationEleve[];
  ojetUrl: string = 'consultationeleve';

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
        typeConsultation: ['', Validators.required],
        dateConsultation: ['', Validators.required],
        remarqueConsultation: [null, Validators.required],


       });
      this.chargerTypeConsultation();

    }
    onSubmit(consultaionEleve: any) {
      console.log('ok');
      console.log(consultaionEleve);
      consultaionEleve.eleve = this.idEleve;

      this.crudservice.createLigne(this.ojetUrl, consultaionEleve)
        .subscribe( data => {
          this.crudservice.findAllSonByMother(this.ojetUrl, this.idEleve)
    .subscribe( data => {
        this.entities = data.result;
      });
        });
        this.addForm.reset();
    }


  chargerTypeConsultation() {
    this.typeConsultation =[];
       this.typeConsultation = [
        {label:'داخلية', value:"داخلية"},
        {label:'خارجية', value:"خارجية"},


    ];
  }
delete(entity:ConsultationEleve ): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Row Deleted Success.'});
       });
  }


}
