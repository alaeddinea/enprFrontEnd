import { Component, OnInit } from '@angular/core';
import { Session } from 'protractor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { first } from 'rxjs/operators';
import { SelectItem } from 'primeng/primeng';
@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {

  entity: Session;
  addForm: FormGroup;
  ojetUrl: string = 'group';
   ojetUrlSession: string = 'session';
  session: SelectItem[];
  constructor(private formBuilder: FormBuilder,private router: Router, private crudService: CrudGlobalService) { }

    ngOnInit() {
      let entityId = window.localStorage.getItem("editGrouptId");
      if(!entityId) {

        this.router.navigate(['list-group']);
        return;
    }
    this.addForm = this.formBuilder.group({
      id: [],
      session: ['', Validators.required],
      nomGroup: ['', Validators.required],
      commandGroup: ['', Validators.required],
     });

     this.crudService.getLigneById(this.ojetUrl,entityId)
       .subscribe( data => {
         this.addForm.setValue(data.result);
       });

       this.chargerDropDownList();
      }
      chargerDropDownList() {
        this.crudService.findAllActiveSession(this.ojetUrlSession, "مفعل").subscribe(data => {

          this.session = [];
          data.result.forEach((session: any, value: any) => {
          console.log(data.result);
            this.session.push({ label: session.numSession, value: session });
          });

        });
      }
   onSubmit() {
     this.crudService.updateLigne(this.ojetUrl,this.addForm.value)
       .pipe(first())
       .subscribe(
         data => {
           if(data.status === 200) {

             this.router.navigate(['enpr/list-group']);
           }else {
             alert(data.message);
           }
         },
         error => {
           alert(error);
         });
   }

  }
