import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-add-gouvernorat',
  templateUrl: './add-gouvernorat.component.html',
  styleUrls: ['./add-gouvernorat.component.scss']
})
export class AddGouvernoratComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'gouvernorat';

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      libelle_gouvernorat: ['', Validators.required],
      
    
    });


  }

  onSubmit() {
 
    this.crudservice.createLigne(this.ojetUrl, this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['enpr/list-gouvernorat']);
      });
  }


}