import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Eleve } from '../../domain/eleve';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../domain/api.response';
@Component({
  selector: 'app-details-eleve',
  templateUrl: './details-eleve.component.html',
  styleUrls: ['./details-eleve.component.scss']
})
export class DetailsEleveComponent implements OnInit {
  imageBlob: any;
  name = 'alaeddine';
  firstname = 'aymen';
  job = 'trainer';
  path = 'rotating_card_profile3.png';


  eleve: Eleve;
  ojetUrl: string = 'eleve';
  ojetUrlpenleteEleve: string = 'penaliteeleve';
  ojetUrlRepoEleve: string = 'repoeleve';
  ojetUrlConsulationEleve: string = 'consultationeleve';
  selectedFile: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  uploadImageData: any;
  imageModel:any=null;

  elevePenaliteClicked=false;
  textButtonAffiche ="إسترشاد";
  eleveMedicaleClicked = false;
  textMedicaleButtonAffiche="إسترشاد";
  eleveTestpsyClicked = false;
  textTestpsyButtonAffiche = "إسترشاد";
  eleveTesMesuration= false;
  textMesurationButtonAffiche = "إسترشاد";
  countPenalite: any;
  countRepo: any;
  countConsultation: any;
  entityeleveId: any;
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }


  ngOnInit() {
    this.imageBlob = null;
    let entityId = window.localStorage.getItem("detalEleveId");
    this.entityeleveId=entityId
    if (!entityId) {

      this.router.navigate(['list-eleve']);
      return;
    }
    this.crudservice.getLigneById(this.ojetUrl, entityId)
      .subscribe(data => {

        this.getImage(data.result.imageModelId);

        this.eleve = data.result;
        this.imageBlob = this.eleve.img;
  });
  this.crudservice.findAllSonByMother(this.ojetUrlpenleteEleve,entityId)
  .subscribe( data => {
    if (data.result != null) {
      this.countPenalite = '0' + data.result.length;
    }
    });
    this.crudservice.findAllSonByMother(this.ojetUrlRepoEleve,entityId)
    .subscribe( data => {
      if (data.result != null) {
        this.countRepo = '0' + data.result.length;
      }
      });
      this.crudservice.findAllSonByMother(this.ojetUrlConsulationEleve,entityId)
      .subscribe( data => {
        if (data.result != null) {
          this.countConsultation = '0' + data.result.length;
        }
        });

  }




  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage(imageId) {
    //Make a call to Sprinf Boot to get the Image Bytes.
   // console.log("imageId");
   // console.log(imageId);
    this.httpClient.get<ApiResponse>('http://192.168.100.70:8080/enprBackend/api/image/get/' +imageId)
      .subscribe(
        res => {

          this.retrieveResonse = res.result;
          if (this.retrieveResonse != null) {
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          }
        }
      );
  }

  detailsElevePenalite() {
    this.elevePenaliteClicked=!this.elevePenaliteClicked;
    if(this.elevePenaliteClicked){
      this.textButtonAffiche="غلق";
    }else{
      this.textButtonAffiche="إسترشاد";
    }


  }
  detailsEleveMedicale(){
    this.eleveMedicaleClicked=!this.eleveMedicaleClicked;
    if(this.eleveMedicaleClicked){
      this.textMedicaleButtonAffiche="غلق";
    }else{
      this.textMedicaleButtonAffiche="إسترشاد";
    }


  }



  detailsEleveTestpsy(){
    this.eleveTestpsyClicked=!this.eleveTestpsyClicked;
    if(this.eleveTestpsyClicked){
      this.textTestpsyButtonAffiche="غلق";
    }else{
      this.textTestpsyButtonAffiche="إسترشاد";
    }


  }

  detailsEleveMesuration(){
    this.eleveTesMesuration=!this.eleveTesMesuration;
    if(this.eleveTesMesuration){
      this.textMesurationButtonAffiche="غلق";
    }else{
      this.textMesurationButtonAffiche="إسترشاد";
    }


  }

  
print()  {
   

  this.crudservice.exportPdf(this.ojetUrl,this.entityeleveId)
  .subscribe(x => {
    const blob = new Blob([x],{type: 'application/pdf'});
    const data = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = data;
    link.download = 'eleve.pdf';
  //  link.dispatchEvent(new MouseEvent('click',{bubbles: true,cancelable:true, view:window}))
    
    window.open(data, '_blank', 'top=0,left=0,height=100%,width=auto');
setTimeout(function(){
  window.URL.revokeObjectURL(data);
  link.remove();
},100)

  } );
}

}
