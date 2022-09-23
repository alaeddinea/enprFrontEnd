import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudGlobalService } from '../../crud-global.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }
  addForm: FormGroup;
  ojetUrl: string = 'group';
  ojetUrlSession: string = 'session';
  session: SelectItem[];

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      session: ['', Validators.required],
      nomGroup: ['', Validators.required],
      commandGroup: ['', Validators.required],
    });

    this.chargerDropDownList();
  }
  chargerDropDownList() {
    this.crudservice.findAllActiveSession(this.ojetUrlSession, "مفعل").subscribe(data => {

      this.session = [];
      data.result.forEach((session: any, value: any) => {
      console.log(data.result);
        this.session.push({ label: session.numSession, value: session.id });
      });

    });
  }
  onSubmit() {

    this.crudservice.createLigne(this.ojetUrl, this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['enpr/list-group']);
      });
  }

}
