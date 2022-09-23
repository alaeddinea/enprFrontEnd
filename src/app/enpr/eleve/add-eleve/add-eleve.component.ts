import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../domain/api.response';
import { Eleve } from '../../domain/eleve';

@Component({
  selector: 'app-add-eleve',
  templateUrl: './add-eleve.component.html',
  styleUrls: ['./add-eleve.component.scss']
})
export class AddEleveComponent implements OnInit {
  slectedFile: File = null;
  addForm: FormGroup;
  ojetUrl: string = 'eleve';
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




  selectedFile: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  uploadImageData: any;
  imageModel: any;
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }

  ngOnInit() {
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
      imageEl: ['', Validators.required],
      fileName: ['', Validators.required],
      numDossierRecrueEl: ['', Validators.required],
      categorie: ['', Validators.required],
      grade: [null, Validators.required],
      gouvernorat: [null, Validators.required],
      delegation: [null, Validators.required],
      rueEl: ['', Validators.required],
      codePostaleEl: ['', Validators.required],
      zonePoliceEl: ['', Validators.required],
      centralPoliceEl: ['', Validators.required],
      nivScolaireEl: [null, Validators.required],
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
      session: [null, Validators.required],
      group: [null, Validators.required],
      company: [null, Validators.required],
      section: [null, Validators.required],
      datenterEl: [null, Validators.required],
      timeEnterEl: [null, Validators.required],
      sexeEl: [null, Validators.required],


    });
    this.nivScolaireEl = [];
    this.nivScolaireEl = [

      { label: 'ثانوي', value: 'ثانوي' },
      { label: 'بكالوريا', value: 'بكالوريا' },
      { label: 'تعليم عالي', value: 'تعليم عالي' },
      { label: 'تدريب مهني و تقني', value: 'تدريب مهني و تقني' },
    ];
    this.chargerGouvernorat();
    this.chargerSession();
  }







  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post<ApiResponse>('http://localhost:8080/image/upload', uploadImageData)
      .subscribe(data => {
        //  console.log(data.status);
        this.imageModel = data.result.id;
        console.log(this.imageModel);

        /*if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }*/
        this.getImage();
      }
      );

  }


  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get<ApiResponse>('http://localhost:8080/image/get/' + this.imageModel)
      .subscribe(
        res => {
          console.log(res.result);
          this.retrieveResonse = res.result;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          console.log(this.retrieveResonse.picByte);
        }
      );
  }





















  chargerSession() {

    this.crudservice.findAllActiveSession(this.ojetUrlSession, "مفعل").subscribe(data => {
      this.session = [];
      data.result.forEach((session: any, value: any) => {
        console.log(data.result);
        this.session.push({ label: session.numSession, value: session.id });
      });
    });
  }
  onChangeSession(e) {
    console.log(e.value);
    this.crudservice.findAllSonByMother(this.ojetUrlGroup, e.value).subscribe(data => {

      this.group = [];
      if (data.result != null) {
        data.result.forEach((group: any, value: any) => {
          this.group.push({ label: group.nomGroup, value: group.id });
        });
      }
    });
  }
  onChangeGroup(e) {
    console.log(e.value);
    this.crudservice.findAllSonByMother(this.ojetUrlCompany, e.value).subscribe(data => {

      this.company = [];
      if (data.result != null) {
        data.result.forEach((company: any, value: any) => {
          this.company.push({ label: company.numCompany, value: company.id });

        });
      }
    });
  }
  onChangeCompany(e) {
    // console.log(e.value);
    this.crudservice.findAllSonByMother(this.ojetUrlSection, e.value).subscribe(data => {

      this.section = [];
      if (data.result != null) {
        data.result.forEach((section: any, value: any) => {
          this.section.push({ label: section.numSection, value: section.id });

        });
      }
    });
  }
  onSubmit(eleve: Eleve) {
    eleve.imageModelId = this.imageModel;
    // console.log(this.addForm.controls['imageModel'].value);
    this.crudservice.createLigne(this.ojetUrl, eleve)
      .subscribe(data => {
        this.router.navigate(['enpr/list-eleve']);

      });




  }

  radioChange(e) {

    this.crudservice.getlistEntity(this.ojetUrlGrade).subscribe(data => {

      this.grade = [];
      data.result.forEach((garde: any, value: any) => {
        if (garde.categorieGrade == e.value) {
          this.grade.push({ label: garde.libelle_grade, value: garde.id });
        }
      });

    });
  }
  chargerGouvernorat() {
    this.crudservice.getlistEntity(this.ojetUrlGouvernorat).subscribe(data => {

      this.gouvernorat = [];
      data.result.forEach((gouvernorat: any, value: any) => {

        this.gouvernorat.push({ label: gouvernorat.libelle_gouvernorat, value: gouvernorat.id });

      });

    });
  }

  onChangeGouvernorat(e) {

    this.crudservice.findAllSonByMother(this.ojetUrlDelegation, e.value).subscribe(data => {
      // console.log(data.result);
      this.delegation = [];
      data.result.forEach((delegation: any, value: any) => {
        this.delegation.push({ label: delegation.libelle_delegation, value: delegation });
      });

    });

  }


}
