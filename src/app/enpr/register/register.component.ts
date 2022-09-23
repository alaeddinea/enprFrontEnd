import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { CrudGlobalService } from '../crud-global.service';
import { Personelle } from '../domain/personelle';
import { User } from '../domain/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
// tslint:disable-next-line:max-line-length
export class RegisterComponent implements OnInit {
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  display: boolean = false;
  ojetUrlPersonelle: string = 'personelle';
  personelle:Personelle;
  entitiesPersonelle: Personelle[];
  user: User;
  role: any [];
  form: any = { };
  constructor(private authService: AuthService, private crudservice: CrudGlobalService) { }

  ngOnInit(): void {
    this.role = [];
  }

  roles =[
    {label:'admin', value:'admin'},
    {label:'قبول أولي', value:'user'},
    {label:'manipulation', value:'manipulation'},
    {label:'sante', value:'sante'},
    {label:'psycho', value:'psycho'}
    ];

  onSubmit(): void {
    //console.log(this.form);
    this.user  = this.form;
    //console.log(this.user);
    this.user.role = this.role;
    console.log(this.user);
    this.authService.register(this.user).subscribe(

      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  onChange(event) {
   this.role.push(event.value);
   console.log('role : ' + this.role);
  }
  change(matricule: number) { // without type info
    console.log("matricule");
     console.log(matricule);
    // tslint:disable-next-line:no-unused-expression
    this.crudservice.getLigneById(this.ojetUrlPersonelle, matricule)
    .subscribe(data => {
      console.log(data.result);
      this.personelle = data.result;
      this.form = {username: this.personelle.matricule, personelle :this.personelle,  role: this.role,
       password: this.personelle.cnrps  };


      });
  }
}
