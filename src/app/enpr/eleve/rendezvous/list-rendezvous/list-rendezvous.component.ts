

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
import { RendezvousEleve } from '../../../domain/rendezvouseleve';
@Component({
  selector: 'app-list-rendezvous',
  templateUrl: './list-rendezvous.component.html',
  styleUrls: ['./list-rendezvous.component.scss']
})
export class ListRendezvousComponent implements OnInit {
  currentUserRole: any ;
  @Input() idEleve: any;
  @Input() tabclickedMedicale: boolean=false;
  addForm : FormGroup;
  msgs: Message[] = [];
  typeRendezvous: SelectItem[];
  entities: RendezvousEleve[];
  ojetUrl: string = 'rendezvouseleve';

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
        typeRendezvous: ['', Validators.required],
        dateRendezvous: ['', Validators.required],
    //    timeRendezvous: ['', Validators.required],
        remarqueRendezvous: [null, Validators.required],


       });
      this.chargerTypeConsultation();

    }
    onSubmit(rendezvouEleve: any) {
      console.log('ok');
      console.log(rendezvouEleve);
      rendezvouEleve.eleve = this.idEleve;

      this.crudservice.createLigne(this.ojetUrl, rendezvouEleve)
        .subscribe( data => {
          this.crudservice.findAllSonByMother(this.ojetUrl, this.idEleve)
    .subscribe( data => {
        this.entities = data.result;
      });
        });
        this.addForm.reset();
    }


  chargerTypeConsultation() {
    this.typeRendezvous =[];
       this.typeRendezvous = [
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
