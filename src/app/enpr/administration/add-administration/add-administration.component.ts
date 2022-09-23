import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-administration',
  templateUrl: './add-administration.component.html',
  styleUrls: ['./add-administration.component.scss']
})
export class AddAdministrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'administration';


    ngOnInit() {
      this.addForm = this.formBuilder.group({
        id: [],
        nomAdministration: ['', Validators.required],
       });
    }
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-administration']);
        });
    }

}
