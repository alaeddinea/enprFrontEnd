import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService, SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';

import { Penalite } from '../../../domain/penalite';
import { CrudGlobalService } from '../../../crud-global.service';
import { TestpsyEleve } from '../../../domain/testpsy-eleve';
import { LoginComponent } from '../../../../login/login.component';
import { TokenStorageService } from '../../../../_services/token-storage.service';
@Component({
  selector: 'app-suivie-testpsy',
  templateUrl: './suivie-testpsy.component.html',
  styleUrls: ['./suivie-testpsy.component.scss']
})
export class SuivieTestpsyComponent implements OnInit {
  currentUserRole: any;
  @Input() idEleve: any;
  @Input() tabclickedTestpsy: boolean=false;
  addForm : FormGroup;
  msgs: Message[] = [];
  testpsy: SelectItem[];
  entities: TestpsyEleve[];
  ojetUrl: string = 'testpsyeleve';
  ojetUrlTestpsy: string = 'testpsy';
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService, private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserRole = this.token.getUser().roles[0];
    this.crudservice.findAllSonByMother(this.ojetUrl, this.idEleve)
    .subscribe( data => {
        this.entities = data.result;
      });
      this.addForm = this.formBuilder.group({
        id: [],
        testpsy: ['', Validators.required],
        dateTestpsy: ['', Validators.required],
        remarque: ['', Validators.required],


       });
      this.chargerVaccin();

    }
    onSubmit(testpsyeleve: any) {
      console.log('ok');
      console.log(testpsyeleve);
      testpsyeleve.eleve = this.idEleve;

      this.crudservice.createLigne(this.ojetUrl, testpsyeleve)
        .subscribe( data => {
          this.crudservice.findAllSonByMother(this.ojetUrl, this.idEleve)
    .subscribe( data => {
        this.entities = data.result;
      });
        });
        this.addForm.reset();
    }


  chargerVaccin() {
    this.crudservice.getlistEntity(this.ojetUrlTestpsy).subscribe(data => {

      this.testpsy = [];

      data.result.forEach((testpsy: any, value: any) => {
      console.log(data.result);
        this.testpsy.push({ label: testpsy.nomTestpsy, value: testpsy });
      });

    });
  }
delete(entity: TestpsyEleve): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.id)
      .subscribe( data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Row Deleted Success.'});
       });
  }


}
