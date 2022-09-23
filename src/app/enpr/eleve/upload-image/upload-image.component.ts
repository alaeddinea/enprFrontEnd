import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../domain/api.response';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  @Input() imageBlobFromEleve;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    

       //Make a call to Sprinf Boot to get the Image Bytes.
    /*   this.httpClient.get<ApiResponse>('http://192.168.100.70:8080/enprBackend/api/image/get/' + this.imageId)
       .subscribe(
         res => {
       //    console.log(res.result);
           this.retrieveResonse = res.result;
           if (this.retrieveResonse != null) {
           this.base64Data = this.retrieveResonse.picByte;
           this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          }
         //  console.log(this.retrieveResonse.picByte);
         }
       );*/
  }
  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    //console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://192.168.100.70:8080/enprBackend/api/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        //console.log(response);
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }

  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get<ApiResponse>('http://192.168.100.70:8080/enprBackend/api/image/get/' + 338)
      .subscribe(
        res => {
          console.log(res.result);
          this.retrieveResonse = res.result;
          if (this.retrieveResonse != null) {
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          }
        //  console.log(this.retrieveResonse.picByte);
        }
      );
  }
}
