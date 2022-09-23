import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../../_services/token-storage.service';
@Component({
  selector: 'app-add-testpsy',
  templateUrl: './add-testpsy.component.html',
  styleUrls: ['./add-testpsy.component.scss']
})
export class AddTestpsyComponent implements OnInit {
  currentUserRole: any;
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'testpsy';


    ngOnInit() {
      this.addForm = this.formBuilder.group({
        id: [],
        nomTestpsy: ['', Validators.required],
       });
    }
    onSubmit() {
      this.currentUserRole = this.token.getUser().roles[0];
      this.crudservice.createLigne(this.ojetUrl, this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-testpsy']);
        });
    }

}
