import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  currentUser: any;
  constructor(private authService: AuthService,
    private tokenStorage: TokenStorageService, private router: Router,) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    if (this.isLoggedIn == true) {

      this.redirectPage();

    }

  }

  onSubmit(): void {

    this.authService.login(this.form).subscribe(
      data => {
    
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        console.log('tout les roles :' + this.roles);
   
     //   alert(this.roles);
        this.redirectPage();
        //  this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  redirectPage(): void {

    if (this.roles.some((item) => item == 'ROLE_ADMIN')) {
      this.router.navigate(['enpr/list-eleve']);
    } else if (this.roles.some((item) => item == 'ROLE_USER')) {
      this.router.navigate(['enpr/list-elv-pre-selection']);
    } else if (this.roles.some((item) => item == 'ROLE_MANIPULATION')) {
      this.router.navigate(['enpr/list-eleve']);
    } else if (this.roles.some((item) => item == 'ROLE_PSYCHO')) {
      this.router.navigate(['enpr/list-eleve']);
    } else if (this.roles.some((item) => item == 'ROLE_SANTE')) {
      this.router.navigate(['enpr/list-eleve']);
    }

  }
  reloadPage(): void {
    window.location.reload();
  }
}
