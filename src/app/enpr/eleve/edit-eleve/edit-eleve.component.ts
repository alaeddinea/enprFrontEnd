import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Eleve } from '../../domain/eleve';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../domain/api.response';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit-eleve',
  templateUrl: './edit-eleve.component.html',
  styleUrls: ['./edit-eleve.component.scss']
})
export class EditEleveComponent implements OnInit {
  entityId: any;
  imageBlob: any;
  eleveGet: Eleve;
  datenaissanceEleve: any;
  datenterEleve: any;
  eleve: Eleve;
  addForm: FormGroup;
  ojetUrl: string = 'eleve';
  ojetUrlGrade: string = 'grade';
  ojetUrlSpecialite: string = 'specialite';
  ojetUrlEtatcivil: string = 'etatcivil';
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
  specialites: SelectItem[];
  etatcivils: SelectItem[];
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
  imageModel: any = null;
  // tslint:disable-next-line:max-line-length
  constructor(private datePipe: DatePipe, private httpClient: HttpClient, private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }

  ngOnInit() {
    this.entityId = window.localStorage.getItem("editEleveId");
    if (!this.entityId) {

      this.router.navigate(['list-eleve']);
      return;
    }
    
    this.addForm = this.formBuilder.group({
      id: [],
      img: [],
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
      specialite: [null, Validators.required],
      etatcivil: [null, Validators.required],
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
      imageModelId: [],
      sexeEl: [null, Validators.required],
      datenterEl: [null, Validators.required],
      timeEnterEl: [null, Validators.required],
    });
    this.crudservice.getLigneById(this.ojetUrl, this.entityId)
      .subscribe(data => {
        this.imageBlob = null;
        console.log("eleve1");
        console.log(data.result);
        this.eleveGet = data.result;
        this.imageBlob = this.eleveGet.img;
        this.addForm.setValue(data.result);
        this.datenaissanceEleve = this.datePipe.transform(new Date(this.eleveGet.datenaissanceEl), 'yyyy-MM-dd');
        this.datenterEleve = this.datePipe.transform(new Date(this.eleveGet.datenterEl), 'yyyy-MM-dd');
        if (data.result.imageModelId !== 0) {
          this.getImage(data.result.imageModelId);
        }
        this.eleve = data.result;
        /*
        this.crudservice.findAllSonByMother(this.ojetUrlDelegation, data.result.gouvernorat.id).subscribe(data => {
          this.delegation = [];
          data.result.forEach((delegation: any, value: any) => {
            this.delegation.push({ label: delegation.libelle_delegation, value: delegation });
          });
        });
*/try {
          this.crudservice.getlistEntity(this.ojetUrlGrade).subscribe(datagrade => {
            // console.log("datagrade");
            //   console.log(datagrade);
            this.grade = [];
            datagrade.result.forEach((garde: any, value: any) => {
              // console.log("garde");
              //  console.log(garde.categorieGrade);
              if (this.eleve.categorie == garde.categorieGrade) {
                this.grade.push({ label: garde.libelle_grade, value: garde });

              }
            });
            //  console.log("gradeee");
            //  console.log(this.grade);

          });
          this.crudservice.findAllSonByMother(this.ojetUrlGroup, data.result.session.id).subscribe(data => {
            this.group = [];
            data.result.forEach((group: any, value: any) => {
              this.group.push({ label: group.nomGroup, value: group });
            });
          });
        } catch (error) {
          console.log(' — Error is handled gracefully: ', error.name);
        }
        try {
          this.crudservice.findAllSonByMother(this.ojetUrlCompany, data.result.group.id).subscribe(data => {
            this.company = [];
            data.result.forEach((company: any, value: any) => {
              this.company.push({ label: company.numCompany, value: company });
            });
          });
        } catch (error) {
          console.log(' — Error is handled gracefully: ', error.name);
        }
        try {
          this.crudservice.findAllSonByMother(this.ojetUrlSection, data.result.company.id).subscribe(data => {
            this.section = [];
            data.result.forEach((section: any, value: any) => {
              this.section.push({ label: section.numSection, value: section });
            });
          });
          this.chargerDelegation(this.eleve.gouvernorat.id);
        } catch (error) {
          console.log(' — Error is handled gracefully: ', error.name);
        }
      });
    this.nivScolaireEl = [];
    this.nivScolaireEl = [

      { label: 'ثانوي', value: 'ثانوي' },
      { label: 'بكالوريا', value: 'بكالوريا' },
      { label: 'تعليم عالي', value: 'تعليم عالي' },
      { label: 'تدريب مهني و تقني', value: 'تدريب مهني و تقني' },
    ];
 
    this.chargerSpecialite();
    this.chargerEtatcivil() ;
    this.chargerGouvernorat();

    this.chargerSession();
  }
  chargerSpecialite() {
    this.crudservice.getlistEntity(this.ojetUrlSpecialite).subscribe(data => {
    
      this.specialites = [];
      data.result.forEach((specialite: any, value: any) => {
        //   console.log('sesssss');
        //  console.log(data.result);
        this.specialites.push({ label: specialite.libelle_specialite, value: specialite });
      });

    });
  }
  chargerEtatcivil() {
    this.crudservice.getlistEntity(this.ojetUrlEtatcivil).subscribe(data => {
    
      this.etatcivils = [];
      data.result.forEach((etatcivil: any, value: any) => {
        //   console.log('sesssss');
        //  console.log(data.result);
        this.etatcivils.push({ label: etatcivil.libelle_etatcivil, value: etatcivil });
      });

    });
  }
  chargerSession() {
    this.crudservice.findAllActiveSession(this.ojetUrlSession, 'مفعل').subscribe(data => {
      this.session = [];
      data.result.forEach((session: any, value: any) => {
        //   console.log('sesssss');
        //  console.log(data.result);
        this.session.push({ label: session.numSession, value: session });
      });

    });
  }

  onChangeSession(e) {
    // console.log(e.value);
    this.crudservice.findAllSonByMother(this.ojetUrlGroup, e.value.id).subscribe(data => {

      this.group = [];
      if (data.result != null) {
        data.result.forEach((group: any, value: any) => {
          this.group.push({ label: group.nomGroup, value: group });

        });
      }
    });
  }
  onChangeGroup(e) {
    console.log(e.value);
    this.crudservice.findAllSonByMother(this.ojetUrlCompany, e.value.id).subscribe(data => {

      this.company = [];
      if (data.result != null) {
        data.result.forEach((company: any, value: any) => {
          this.company.push({ label: company.numCompany, value: company });

        });
      }
    });
  }
  onChangeCompany(e) {
    //  console.log(e.value);
    this.crudservice.findAllSonByMother(this.ojetUrlSection, e.value.id).subscribe(data => {

      this.section = [];
      if (data.result != null) {
        data.result.forEach((section: any, value: any) => {
          this.section.push({ label: section.numSection, value: section });

        });
      }
    });
  }
  onSubmit(eleve: Eleve) {

    this.crudservice.updateLigne(this.ojetUrl, eleve)
      .subscribe(data => {
        console.log('save eleve !');
        console.log(data.result);
        console.log('save eleve !');



        if (this.selectedFile != null) {
          const uploadImageData = new FormData();
          // uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
          uploadImageData.append('imageFile', this.selectedFile, this.entityId);
          //Make a call to the Spring Boot Application to save the image
          this.httpClient.post<ApiResponse>('http://192.168.100.70:8080/enprBackend/api/image/upload', uploadImageData)
            .subscribe(data => {
              this.router.navigate(['enpr/list-eleve']);
            }
            );
        } else {
          this.router.navigate(['enpr/list-eleve']);
        }
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

        this.gouvernorat.push({ label: gouvernorat.libelle_gouvernorat, value: gouvernorat });

      });

    });



  }
  chargerDelegation(id: any) {
    this.crudservice.findAllSonByMother(this.ojetUrlDelegation, id).subscribe(data => {
      console.log(data.result);
      this.delegation = [];
      data.result.forEach((delegation: any, value: any) => {
        this.delegation.push({ label: delegation.libelle_delegation, value: delegation });
      });

    });



  }

  onChangeGouvernorat(e) {
    console.log(e.value);
    this.crudservice.findAllSonByMother(this.ojetUrlDelegation, e.value.id).subscribe(data => {
      // console.log(data.result);
      this.delegation = [];
      data.result.forEach((delegation: any, value: any) => {
        this.delegation.push({ label: delegation.libelle_delegation, value: delegation });
      });

    });
  }

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];


  }



  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage(imageId) {
    try {
      //Make a call to Sprinf Boot to get the Image Bytes.
      // console.log("imageId");
      // console.log(imageId);
      this.httpClient.get<ApiResponse>('http://192.168.100.70:8080/enprBackend/api/image/get/' + imageId)

        .subscribe(
          res => {
            //    console.log(res.result);
            this.retrieveResonse = res.result;



            if (this.retrieveResonse) {
              this.base64Data = this.retrieveResonse.picByte;

              this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
              //  console.log(this.retrieveResonse.picByte);
            }
          }
        );
    } catch (error) {
      console.log(' — Error is handled gracefully: ', error.name);
    }
  }


}
