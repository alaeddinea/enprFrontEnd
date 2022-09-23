import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.scss']
})
export class AddSalleComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'salle';


    ngOnInit() {
      this.addForm = this.formBuilder.group({
        id: [],
        nomSalle: ['', Validators.required],
        capaciteSalle: ['', Validators.required],
       });
    }
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-salle']);
        });
    }

}
