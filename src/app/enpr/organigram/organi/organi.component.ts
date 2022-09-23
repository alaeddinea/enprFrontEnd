import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreeNode, MessageService } from 'primeng/api';

import { Message } from '@angular/compiler/src/i18n/i18n_ast';

import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { Section } from '../../domain/section';

@Component({
  providers: [MessageService],

  selector: 'app-organi',
  templateUrl: './organi.component.html',
  styles: [`
  .company.ui-organizationchart .ui-organizationchart-node-content.ui-person {
      padding: 0;
      border: 0 none;
  }

  .node-header,.node-content {
      padding: .5em .7em;
  }

  .node-header {
      background-color: #495ebb;
      color: #ffffff;
  }

  .node-content {
      text-align: center;
      border: 1px solid #495ebb;
  }

  .node-content img {
      border-radius: 50%;
  }

  .department-cfo {
      background-color: #7247bc;
      color: #ffffff;
  }

  .department-coo {
      background-color: #a534b6;
      color: #ffffff;
  }

  .department-cto {
      background-color: #e9286f;
      color: #ffffff;
  }

  .ui-person .ui-node-toggler {
      color: #495ebb !important;
  }

  .department-cto .ui-node-toggler {
      color: #8a0a39 !important;
  }
`],
  encapsulation: ViewEncapsulation.None
})
export class OrganiComponent implements OnInit {
  data: TreeNode[];
  ChiledrenGroup: TreeNode[] = [];
  ChiledrenCompany: TreeNode[] = [];
  ChiledrenSection: TreeNode[] = [];
  selectedNode: TreeNode;
  msgs: Message[] = [];

  entities: Section[];
  ojetUrlSession: string = 'session';
  ojetUrlGroup: string = 'group';
  ojetUrlCompany: string = 'company';
  ojetUrlSection: string = 'section';

  constructor(private router: Router, private crudservice: CrudGlobalService, private messageService: MessageService) { }

  ngOnInit() {
    // get Session
    this.crudservice.findAllActiveSession(this.ojetUrlSession, "مفعل").subscribe(dataSession => {
      this.entities = dataSession.result;
      console.log('session');
      console.log(this.entities);
      console.log('session');
      this.data = [];
      dataSession.result.forEach((session: any, value: any) => {

        //get Group
        this.crudservice.findAllSonByMother(this.ojetUrlGroup, session.id).subscribe(dataGroup => {
          console.log('group');
          console.log(dataGroup.result);
          console.log('group');
          dataGroup.result.forEach((group: any, value: any) => {
            this.ChiledrenCompany = [];
            //get Company
            this.crudservice.findAllSonByMother(this.ojetUrlCompany, group.id).subscribe(dataCompany => {

              dataCompany.result.forEach((company: any, value: any) => {



                //get section
                this.crudservice.findAllSonByMother(this.ojetUrlSection, company.id).subscribe(dataSection => {
                  this.ChiledrenSection = [];
                  dataSection.result.forEach((section: any, value: any) => {

                    this.ChiledrenSection.push({
                      label: section.numSection,
                      type: 'person',
                      styleClass: 'ui-person',
                      expanded: true,
                      data: { name: ' الفصيل  ' + section.numSection, 'avatar': 'walter.jpg' },
                    });

                  });

                  this.ChiledrenCompany.push({
                    label: company.numCompany,
                    type: 'person',
                    styleClass: 'ui-person',
                    expanded: true,
                    data: { name: ' السرية  ' + company.numCompany, 'avatar': 'walter.jpg' },
                    children: this.ChiledrenSection,
                  });
                });




              });
              // console.log(this.ChiledrenCompany);


            });
            //get Company

            this.ChiledrenGroup.push({
              label: group.nomGroup,
              type: 'person',
              styleClass: 'ui-person',
              expanded: true,
              data: { name: group.nomGroup, 'avatar': 'walter.jpg' },
              children: this.ChiledrenCompany,
            });

          });
          
        });
        //get Group


        this.data.push({
          label: session.numSession,
          type: 'person',
          styleClass: 'ui-person',
          expanded: true,
          data: { name: ' الدورة ' + session.numSession, 'avatar': 'walter.jpg' },
          children: this.ChiledrenGroup,
        });

      });



    });
    // get Session

  }

  /*  this.data =[{
        label: 'CEO',
        type: 'person',
        styleClass: 'ui-person',
        expanded: true,
        data: {name:'Walter White', 'avatar': 'walter.jpg'},
        children: [
            {
                label: 'CFO',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                children:[{
                    label: 'Tax',
                    styleClass: 'department-cfo'
                },
                {
                    label: 'Legal',
                    styleClass: 'department-cfo'
                }],
            },
            {
                label: 'COO',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: {name:'Mike E.', 'avatar': 'mike.jpg'},
                children:[{
                    label: 'Operations',
                    styleClass: 'department-coo'
                }]
            },
            {
                label: 'CTO',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: {name:'Jesse Pinkman', 'avatar': 'jesse.jpg'},
                children:[{
                    label: 'Development',
                    styleClass: 'department-cto',
                    expanded: true,
                    children:[{
                        label: 'Analysis',
                        styleClass: 'department-cto'
                    },
                    {
                        label: 'Front End',
                        styleClass: 'department-cto'
                    },
                    {
                        label: 'Back End',
                        styleClass: 'department-cto'
                    }]
                },
                {
                    label: 'QA',
                    styleClass: 'department-cto'
                },
                {
                    label: 'R&D',
                    styleClass: 'department-cto'
                }]
            }
        ]
    }];*/


  onNodeSelect(event) {
    this.messageService.add({ severity: 'success', summary: 'Node Selected', detail: event.node.label });
  }
}
