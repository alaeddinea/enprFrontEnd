import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'section';
  ojetUrlSession: string = 'session';
  ojetUrlGroup: string = 'group';
  ojetUrlCompany: string = 'company';
  session: SelectItem[];
  group: SelectItem[];
  company: SelectItem[];
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      numSection: ['', Validators.required],
      commandSection: ['', Validators.required],
      session: ['', Validators.required],
      group: ['', Validators.required],
      company: ['', Validators.required],

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
        this.router.navigate(['enpr/list-section']);
      });
  }


  onChangeSession(e) {

    this.crudservice.getlistEntity(this.ojetUrlGroup).subscribe(data => {

      this.group = [];
      data.result.forEach((group: any, value: any) => {

      if(group.session.id==e.value.id){
        this.group.push({ label: group.nomGroup, value: group });
      }
      });

    });
  }
  onChangeGroup(e) {

    this.crudservice.getlistEntity(this.ojetUrlCompany).subscribe(data => {

      this.company = [];
      data.result.forEach((company: any, value: any) => {

      if(company.group.id==e.value.id){
        this.company.push({ label: company.numCompany, value: company });
      }
      });

    });
  }
}
