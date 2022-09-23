import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'service';


    ngOnInit() {
      this.addForm = this.formBuilder.group({
        id: [],
        nomService: ['', Validators.required],
       });
    }
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl, this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-service']);
        });
    }

}
