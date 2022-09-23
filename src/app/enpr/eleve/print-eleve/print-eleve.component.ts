import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';

import { Eleve } from '../../domain/eleve';

import* as html2pdf from 'html2pdf.js';
import { SelectItem } from 'primeng/primeng';
@Component({
  selector: 'app-print-eleve',
  templateUrl: './print-eleve.component.html',
  styleUrls: ['./print-eleve.component.scss']
})
export class PrintEleveComponent implements OnInit {
  ojetUrl: string = 'eleve';
  eleve: Eleve;
  addForm: FormGroup;
  nometprenom:any;

  ojetUrlGrade: string = 'grade';
  ojetUrlGouvernorat: string = 'gouvernorat';
  ojetUrlDelegation: string = 'delegation';
  ojetUrlSession: string = 'session';
  ojetUrlGroup: string = 'group';
  ojetUrlCompany: string = 'company';
  ojetUrlSection: string = 'section';
  grade: SelectItem[];
  gouvernorat: SelectItem[];
  delegation: SelectItem[];
  nivScolaireEl: SelectItem[];
  session: SelectItem[];
  group: SelectItem[];
  company: SelectItem[];
  section: SelectItem[];
  constructor(private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }
  printComponent() {
    let printContents = document.getElementById('entityPrint').innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
  ngOnInit() {
    let entityId = window.localStorage.getItem("printEleveId");
    console.log(entityId);
    if(!entityId) {
    this.router.navigate(['list-eleve']);
      return;
    }
    this.addForm = this.formBuilder.group({
      id: [],
      cinEl: ['', Validators.required],
      dateCinEl: ['', Validators.required],
      prenomEl: ['', Validators.required],
      nomEl: ['', Validators.required],
      datenaissanceEl: ['', Validators.required],
      lieuNaissanceEl: ['', Validators.required],
      mailEl: ['', Validators.required],
      telFamilleEl: ['', Validators.required],
      fixeFamilleEl: ['', Validators.required],
      telEl: ['', Validators.required],
      //private String imagePath; //manque
      numDossierRecrueEl: ['', Validators.required],
      categorie: ['', Validators.required],
      grade: ['', Validators.required],
      gouvernorat: ['', Validators.required],
      delegation: ['', Validators.required],
      rueEl: ['', Validators.required],
      codePostaleEl: ['', Validators.required],
      zonePoliceEl: ['', Validators.required],
      centralPoliceEl: ['', Validators.required],
      nivScolaireEl: ['', Validators.required],
      diplomeEl: ['', Validators.required],
      stagesEl: ['', Validators.required],
      etatMilitaireEl: ['', Validators.required],
      passionEl: ['', Validators.required],
      activiteSportifEl: ['', Validators.required],
      associationEl: ['', Validators.required],
      identitePereEl: ['', Validators.required],
      identiteMereEl: ['', Validators.required],
      fonctionPereEl: ['', Validators.required],
      societePereEl: ['', Validators.required],
      session: ['', Validators.required],
      group: ['', Validators.required],
      company: ['', Validators.required],
      section: ['', Validators.required],
    });
    this.crudservice.getLigneById(this.ojetUrl,entityId)
    .subscribe( data => {
      this.addForm.setValue(data.result);
      this.eleve=data.result;
      this.nometprenom=" "+this.eleve.prenomEl+" "+this.eleve.nomEl+" ";
        console.log(data.result);
      });
      this.crudservice.getLigneById(this.ojetUrl, entityId)
      .subscribe(data => {
        console.log("data.result");
        console.log(data.result);
        this.addForm.setValue(data.result);
        this.eleve=data.result;
        this.crudservice.findAllSonByMother(this.ojetUrlDelegation, data.result.gouvernorat.id).subscribe(data => {
          this.delegation = [];
          data.result.forEach((delegation: any, value: any) => {
            this.delegation.push({ label: delegation.libelle_delegation, value: delegation });
          });
        });
        this.crudservice.getlistEntity(this.ojetUrlGrade).subscribe(datagrade => {
     console.log("gradeee");
     console.log(this.eleve.categorie);
     console.log(datagrade);
          this.grade = [];
          datagrade.result.forEach((garde: any, value: any) => {
            console.log("garde");
            console.log(garde.categorieGrade);
         if(this.eleve.categorie==garde.categorieGrade){
            this.grade.push({ label: garde.libelle_grade, value: garde  });
            console.log("gradeee");
         }
          });

        });
        this.crudservice.findAllSonByMother(this.ojetUrlGroup, data.result.session.id).subscribe(data => {
          this.group = [];
          data.result.forEach((group: any, value: any) => {
            this.group.push({ label: group.nomGroup, value: group });
          });
        });

        this.crudservice.findAllSonByMother(this.ojetUrlCompany, data.result.group.id).subscribe(data => {
          this.company = [];
          data.result.forEach((company: any, value: any) => {
            this.company.push({ label: company.numCompany, value: company });
          });
        });

        this.crudservice.findAllSonByMother(this.ojetUrlSection, data.result.company.id).subscribe(data => {
          this.section = [];
          data.result.forEach((section: any, value: any) => {
            this.section.push({ label: section.numSection, value: section });
          });
        });

      });
    this.nivScolaireEl = [];
    this.nivScolaireEl = [

      { label: 'إبتدائي', value: "إبتدائي" },
      { label: 'إعدادي', value: "إعدادي" },
      { label: 'ثانوي', value: "ثانوي" },
      { label: 'جامعي', value: "جامعي" },
    ];
    this.chargerGouvernorat();

    this.chargerSession();
    setTimeout (() => {
    this.printComponent();
    this.router.navigate(['enpr/list-eleve']);
  }, 3000);
  }
  chargerSession() {
    this.crudservice.getlistEntity(this.ojetUrlSession).subscribe(data => {

      this.session = [];
      data.result.forEach((session: any, value: any) => {
        console.log('sesssss');
        console.log(data.result);
        this.session.push({ label: session.numSession, value: session});
      });

    });
  }

  exportPdf() {

    setTimeout (() => {
      const  options ={
        filename:this.eleve.nomEl+" "+this.eleve.prenomEl+'.pdf',
        html2convas:{},
        jsPDF : {orientation :'landscape'}
      };
      const content:  Element= document.getElementById('entityPrint');
      html2pdf()
      .from(content)
      .set(options)
      .save();
      this.router.navigate(['enpr/list-eleve']);

   }, 1000);


    }
    chargerGouvernorat() {
      this.crudservice.getlistEntity(this.ojetUrlGouvernorat).subscribe(data => {

        this.gouvernorat = [];
        data.result.forEach((gouvernorat: any, value: any) => {

          this.gouvernorat.push({ label: gouvernorat.libelle_gouvernorat, value: gouvernorat.id });

        });

      });



    }
}
