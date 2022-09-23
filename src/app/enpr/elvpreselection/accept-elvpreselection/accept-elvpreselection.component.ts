import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Message } from 'primeng/components/common/message';
import { Eleve } from '../../domain/eleve';
import { ElvPreselection } from '../../domain/elv-preselection';
import { MessageService } from 'primeng/primeng';
@Component({
  selector: 'app-accept-elvpreselection',
  templateUrl: './accept-elvpreselection.component.html',
  styleUrls: ['./accept-elvpreselection.component.scss']
})
export class AcceptElvpreselectionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService,
    private confirmationService: ConfirmationService, private messageService: MessageService) { }
  validateDate: boolean;
  todayDate: any = Date.now();
  addForm: FormGroup;
  addFormHeureDate: FormGroup;
  ojetUrl: string = 'elvpreselection';
  ojetUrlEleve: string = 'eleve';
  ojetUrlGrade: string = 'grade';
  ojetUrlGouvernorat: string = 'gouvernorat';
  ojetUrlSession: string = 'session';
  displayConfirme: boolean = false;
  displayConfirmeAccepted: boolean = false;
  msgs: Message[] = [];
  genre: any;
  eleve = new Eleve;
  elvPreSelection = new ElvPreselection;
  dateNai: any;
  dateConvocation: any;
  ngOnInit() {
    const entityNumD = window.localStorage.getItem('acptElvPreselectionNumD');
    if (!entityNumD) {

      this.router.navigate(['list-elv-pre-selection']);
      return;
    }

    this.addForm = this.formBuilder.group({
      numdossier: ['', Validators.required],
      numcin: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      prenompere: ['', Validators.required],
      prenomgp1: ['', Validators.required],
      prenomdemere: ['', Validators.required],
      nomdemere: ['', Validators.required],
      datenaissance: ['', Validators.required],
      lib_lieu_naissance: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      cod_sexe: ['', Validators.required],
      dateconv: ['', Validators.required],
      gouvernorat: ['', Validators.required],
      id_gouvernorat: ['', Validators.required],
    });
    /*  this.addFormHeureDate = this.formBuilder.group({
        dateEntre: ['', Validators.required],
        heureEntre: ['', Validators.required],
      });*/
    this.crudservice.getLigneById(this.ojetUrl, entityNumD)
      .subscribe(data => {

        this.addForm.setValue(data.result);
        this.genre = data.result.cod_sexe;
        this.elvPreSelection = data.result;
        this.eleve.cinEl = this.elvPreSelection.numcin;
        this.eleve.numDossierRecrueEl = this.elvPreSelection.numdossier;
        this.eleve.nomEl = this.elvPreSelection.nom;
        this.eleve.prenomEl = this.elvPreSelection.prenom;
        this.eleve.datenaissanceEl = this.elvPreSelection.datenaissance;
        this.eleve.lieuNaissanceEl = this.elvPreSelection.lib_lieu_naissance;
        this.eleve.telEl = this.elvPreSelection.telephone;
        this.eleve.telFamilleEl = this.elvPreSelection.telephone;
        this.eleve.fixeFamilleEl = this.elvPreSelection.telephone;
        this.eleve.rueEl = this.elvPreSelection.adresse;
        this.dateNai = this.elvPreSelection.datenaissance;
        this.dateConvocation = this.elvPreSelection.dateconv;
        this.getGouvernorat(this.elvPreSelection.id_gouvernorat);
        this.getDefaultGrade();
        this.getDefaultSession();
        this.eleve.identitePereEl = this.elvPreSelection.prenomgp1 + ' ' + this.elvPreSelection.prenompere;
        this.eleve.identiteMereEl = this.elvPreSelection.nomdemere + ' ' + this.elvPreSelection.prenomdemere;

        this.validateDateEnter();
        console.log(this.eleve);
      });
    //  this.addFormHeureDate.controls['dateEntre'].setValue( this.today);

  }
  validateDateEnter() {
    let dtdy = new Date(this.todayDate);
    let dtconv = new Date(this.elvPreSelection.dateconv);
    console.log('check date ');
    this.validateDate = dtconv <= dtdy;
    console.log(this.validateDate);
    console.log('check date ');
  }
  onSubmit() {
    /* this.crudservice.createLigne(this.ojetUrl, this.addForm.value)
       .subscribe(data => {
         this.router.navigate(['enpr/list-administration']);
       });*/
  }
  confirmAccpter() {
    this.displayConfirme = true;
  }
  retourPageOfficiel() {
    this.router.navigate(['enpr/list-elv-pre-selection']);
  }
  yesAcceptToListSelect() {
    this.displayConfirme = false;
    this.eleve.cinEl = this.elvPreSelection.numcin;
    this.eleve.numDossierRecrueEl = this.elvPreSelection.numdossier;
    this.eleve.datenterEl = new Date(this.todayDate);
    this.eleve.timeEnterEl = this.todayDate;
    this.eleve.sexeEl = this.elvPreSelection.cod_sexe;
    this.crudservice.createLigne(this.ojetUrlEleve, this.eleve)
      .subscribe(data => {
        this.delete(this.elvPreSelection);
      });
  }
  nonAccepted() {
    this.displayConfirme = false;

  }

  acceptFinal() {
    this.displayConfirmeAccepted = false;
    this.router.navigate(['enpr/list-elv-pre-selection']);
  }
  delete(entity: ElvPreselection): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.numdossier)
      .subscribe(data => {
        this.displayConfirmeAccepted = true;
        /*   this.entities = this.entities.filter(u => u !== entity);*/
        //  this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Row Deleted Success.'});  
      });
  }
  getDefaultGrade() {
    this.crudservice.getLigneById(this.ojetUrlGrade, 150) // LAST ID OF GRADE 
      .subscribe(data => {
        this.eleve.grade = data.result;
      });
  }
  getDefaultSession() {
    this.crudservice.getLigneById(this.ojetUrlSession, 300) // last id Of SESSION
      .subscribe(data => {
        this.eleve.session = data.result;
      });
  }
  getGouvernorat(idGouv: any) {
    this.crudservice.getLigneById(this.ojetUrlGouvernorat, idGouv)
      .subscribe(data => {
        this.eleve.gouvernorat = data.result;
        console.log('**************gouvernorat****************');
        console.log(this.eleve.gouvernorat);
        console.log('**************gouvernorat****************');
      });
  }

}
