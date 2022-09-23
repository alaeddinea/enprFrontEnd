import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'company';
  ojetUrlSession: string = 'session';
  ojetUrlGroup: string = 'group';
  session: SelectItem[];
  group: SelectItem[];
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      numCompany: ['', Validators.required],
      commandCompany: ['', Validators.required],
      session: ['', Validators.required],
      group: ['', Validators.required],

    });

    this.chargerDropDownList();
  }
  chargerDropDownList() {
    this.crudservice.findAllActiveSession(this.ojetUrlSession, "مفعل").subscribe(data => {

      this.session = [];
      data.result.forEach((session: any, value: any) => {

        this.session.push({ label: session.numSession, value: session });
      });

    });

  }
  onSubmit() {

    this.crudservice.createLigne(this.ojetUrl, this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['enpr/list-company']);
      });
  }


  onChange(e) {

    this.crudservice.getlistEntity(this.ojetUrlGroup).subscribe(data => {

      this.group = [];
      data.result.forEach((group: any, value: any) => {

      if(group.session.id==e.value.id){
        this.group.push({ label: group.nomGroup, value: group });
      }
      });

    });
  }

}
