import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
@Component({
  selector: 'app-add-medicale',
  templateUrl: './add-medicale.component.html',
  styleUrls: ['./add-medicale.component.scss']
})
export class AddMedicaleComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm : FormGroup;
  ojetUrl: string = 'medicale';
  categorieGrade: SelectItem[];

    ngOnInit() {
      this.addForm = this.formBuilder.group({
        id: [],
        nomMedicale: ['', Validators.required],
      
  
       });
      
    
    }
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-medicale']);
        });
    }
  
  }