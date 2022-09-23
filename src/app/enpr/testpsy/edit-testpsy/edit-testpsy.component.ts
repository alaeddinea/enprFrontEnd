import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-testpsy',
  templateUrl: './edit-testpsy.component.html',
  styleUrls: ['./edit-testpsy.component.scss']
})
export class EditTestpsyComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'testpsy';


    ngOnInit() {
      let entityId = window.localStorage.getItem('editTestpsyId');
      if (!entityId) {

        this.router.navigate(['list-testpsy']);
        return;
    }
      this.addForm = this.formBuilder.group({
        id: [],
        nomTestpsy: ['', Validators.required],
  });

    this.crudservice.getLigneById(this.ojetUrl, entityId)
    .subscribe( data => {
      this.addForm.setValue(data.result);
    });
}
    onSubmit() {
      this.crudservice.createLigne(this.ojetUrl,this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['enpr/list-testpsy']);
        });
    }

  }
