import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-regime',
  templateUrl: './add-regime.component.html',
  styleUrls: ['./add-regime.component.scss']
})
export class AddRegimeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'regime';


    ngOnInit() {
      this.addForm = this.formBuilder.group({
        id: [],
        nomRegime: ['', Validators.required],
       });
    }
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-regime']);
        });
    }

}
