import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { Eleve } from '../../domain/eleve';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Section } from '../../domain/section';
import* as html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-print-section',
  templateUrl: './print-section.component.html',
  styleUrls: ['./print-section.component.scss']
})
export class PrintSectionComponent implements OnInit {
  msgs: Message[] = [];
  title :any;
  section : Section;
  entities: Eleve[];
  ojetUrl: string = 'eleve';
  ojetUrlSection: string = 'section';
  constructor(private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }

  ngOnInit() {
    let entityId = window.localStorage.getItem("printSectionId");
    if(!entityId) {
    this.router.navigate(['list-section']);
      return;
      
  } 

  this.crudservice.getLigneById(this.ojetUrlSection,entityId)
    .subscribe( data => {
        this.section = data.result;
        this.title="  قائمة التلامذة الفصيل  : "+ this.section.numSection+"  --السرية : "+this.section.company.numCompany+" --فوج : "+this.section.group.nomGroup+"  --الدورة : "+this.section.session.numSession;
        console.log(data.result);
      });

  
  this.crudservice.findAllEleveBySection(this.ojetUrl,entityId)
    .subscribe( data => {
        this.entities = data.result;
        console.log('data.result');
        console.log(data.result);
      });
this.exportPdf();
  }

  exportPdf() {
    setTimeout (() => {
      const  options ={
        filename:this.title+'.pdf',
        html2convas:{},
        jsPDF : {orientation :'landscape'}
      };
      const content:  Element= document.getElementById('ourTbale');
      html2pdf()
      .from(content)
      .set(options)
      .save();
      this.router.navigate(['enpr/list-section']);

   }, 1000);
 
     
    }
    
}
