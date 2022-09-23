import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EnprRoutingModule } from './enpr-routing.module';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
// tslint:disable-next-line:max-line-length
import { CalendarModule, ButtonModule, InputTextModule, ContextMenuModule, DropdownModule, DialogModule, MultiSelectModule, SliderModule, GrowlModule, TabViewModule, CodeHighlighterModule, MessageService, ConfirmationService } from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';
import {OrganizationChartModule} from 'primeng/organizationchart';

import { HttpClientModule } from '@angular/common/http';

import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import { ListSessionComponent } from './session/list-session/list-session.component';
import { AddSessionComponent } from './session/add-session/add-session.component';
import { EditSessionComponent } from './session/edit-session/edit-session.component';
import { ListGroupComponent } from './group/list-group/list-group.component';
import { AddGroupComponent } from './group/add-group/add-group.component';
import { EditGroupComponent } from './group/edit-group/edit-group.component';
import { ListCompanyComponent } from './company/list-company/list-company.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { ListSectionComponent } from './section/list-section/list-section.component';
import { AddSectionComponent } from './section/add-section/add-section.component';
import { EditSectionComponent } from './section/edit-section/edit-section.component';
import { OrganiComponent } from './organigram/organi/organi.component';
import {CardModule} from 'primeng/card';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
// tslint:disable-next-line:max-line-length
import{MatButtonModule,MatStepperModule,MatIconModule,MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatRadioGroup} from  '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AddEleveComponent } from './eleve/add-eleve/add-eleve.component';
import { EditEleveComponent } from './eleve/edit-eleve/edit-eleve.component';
import { ListEleveComponent } from './eleve/list-eleve/list-eleve.component';
import { ListGouvernoratComponent } from './gouvernorat/list-gouvernorat/list-gouvernorat.component';
import { AddGouvernoratComponent } from './gouvernorat/add-gouvernorat/add-gouvernorat.component';
import { EditGouvernoratComponent } from './gouvernorat/edit-gouvernorat/edit-gouvernorat.component';
import { EditDelegationComponent } from './delegation/edit-delegation/edit-delegation.component';
import { AddDelegationComponent } from './delegation/add-delegation/add-delegation.component';
import { ListDelegationComponent } from './delegation/list-delegation/list-delegation.component';
import { ListGradeComponent } from './grade/list-grade/list-grade.component';
import { AddGradeComponent } from './grade/add-grade/add-grade.component';
import { EditGradeComponent } from './grade/edit-grade/edit-grade.component';
import { PrintSectionComponent } from './section/print-section/print-section.component';
import { PrintEleveComponent } from './eleve/print-eleve/print-eleve.component';
import { UploadImageComponent } from './eleve/upload-image/upload-image.component';
import { DetailsEleveComponent } from './eleve/details-eleve/details-eleve.component';
import { ListPenaliteComponent } from './penalite/list-penalite/list-penalite.component';
import { AddPenaliteComponent } from './penalite/add-penalite/add-penalite.component';
import { EditPenaliteComponent } from './penalite/edit-penalite/edit-penalite.component';
import {CarouselModule} from 'primeng/carousel';
import { ListPenaliteEleveComponent } from './eleve/penalite/list-penalite-eleve/list-penalite-eleve.component';
import { AddPenaliteEleveComponent } from './eleve/penalite/add-penalite-eleve/add-penalite-eleve.component';
import { EditPenaliteEleveComponent } from './eleve/penalite/edit-penalite-eleve/edit-penalite-eleve.component';
import { ListMedicaleComponent } from './medicale/list-medicale/list-medicale.component';
import { AddMedicaleComponent } from './medicale/add-medicale/add-medicale.component';
import { EditMedicaleComponent } from './medicale/edit-medicale/edit-medicale.component';
import { ListVaccinComponent } from './vaccin/list-vaccin/list-vaccin.component';
import { AddVaccinComponent } from './vaccin/add-vaccin/add-vaccin.component';
import { EditVaccinComponent } from './vaccin/edit-vaccin/edit-vaccin.component';
import { ListFonctionComponent } from './fonction/list-fonction/list-fonction.component';
import { EditFonctionComponent } from './fonction/edit-fonction/edit-fonction.component';
import { AddFonctionComponent } from './fonction/add-fonction/add-fonction.component';
import { ListAdministrationComponent } from './administration/list-administration/list-administration.component';
import { AddAdministrationComponent } from './administration/add-administration/add-administration.component';
import { EditAdministrationComponent } from './administration/edit-administration/edit-administration.component';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { RTL } from '@progress/kendo-angular-l10n';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { AddServiceComponent } from './service/add-service/add-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { ListRegimeComponent } from './regime/list-regime/list-regime.component';
import { AddRegimeComponent } from './regime/add-regime/add-regime.component';
import { EditRegimeComponent } from './regime/edit-regime/edit-regime.component';
import { ListPersonelleComponent } from './personelle/list-personelle/list-personelle.component';
import { AddPersonelleComponent } from './personelle/add-personelle/add-personelle.component';
import { EditPersonelleComponent } from './personelle/edit-personelle/edit-personelle.component';
import { ListFoyerComponent } from './foyer/list-foyer/list-foyer.component';
import { AddFoyerComponent } from './foyer/add-foyer/add-foyer.component';
import { EditFoyerComponent } from './foyer/edit-foyer/edit-foyer.component';
import { EditSalleComponent } from './salle/edit-salle/edit-salle.component';
import { AddSalleComponent } from './salle/add-salle/add-salle.component';
import { ListSalleComponent } from './salle/list-salle/list-salle.component';
import { SuivieSanteComponent } from './eleve/sante/suivie-sante/suivie-sante.component';
import { SuivieRepoComponent } from './eleve/repo/suivie-repo/suivie-repo.component';
import { SuivieConsultationComponent } from './eleve/consultation/suivie-consultation/suivie-consultation.component';
import { SuivieMesureComponent } from './eleve/mesure/suivie-mesure/suivie-mesure.component';
import { ListTestpsyComponent } from './testpsy/list-testpsy/list-testpsy.component';
import { AddTestpsyComponent } from './testpsy/add-testpsy/add-testpsy.component';
import { EditTestpsyComponent } from './testpsy/edit-testpsy/edit-testpsy.component';
import { SuivieTestpsyComponent } from './eleve/testpsy/suivie-testpsy/suivie-testpsy.component';
import { ListElvPreSelectionComponent } from './elvpreselection/list-elv-pre-selection/list-elv-pre-selection.component';
import { AcceptElvpreselectionComponent } from './elvpreselection/accept-elvpreselection/accept-elvpreselection.component';
import { StatistiqueComponent } from './statistique/statistique.component';

import { ChartsModule } from 'ng2-charts';
import {RadioButtonModule} from 'primeng/radiobutton';
import { RegisterComponent } from './register/register.component';
import { ListSpecialiteComponent } from './specialite/list-specialite/list-specialite.component';
import { AddSpecialiteComponent } from './specialite/add-specialite/add-specialite.component';
import { EditSpecialiteComponent } from './specialite/edit-specialite/edit-specialite.component';
import { ListEtatcivilComponent } from './etatcivil/list-etatcivil/list-etatcivil.component';
import { EditEtatcivilComponent } from './etatcivil/edit-etatcivil/edit-etatcivil.component';
import { AddEtatcivilComponent } from './etatcivil/add-etatcivil/add-etatcivil.component';
import { ListRendezvousComponent } from './eleve/rendezvous/list-rendezvous/list-rendezvous.component';
import { RendezvousTodayComponent } from './eleve/rendezvous/rendezvous-today/rendezvous-today.component';




@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [ListSessionComponent, AddSessionComponent, EditSessionComponent, ListGroupComponent, AddGroupComponent, EditGroupComponent, ListCompanyComponent, AddCompanyComponent, EditCompanyComponent, ListSectionComponent, AddSectionComponent, EditSectionComponent, OrganiComponent, AddEleveComponent, EditEleveComponent, ListEleveComponent, ListGouvernoratComponent, AddGouvernoratComponent, EditGouvernoratComponent, EditDelegationComponent, AddDelegationComponent, ListDelegationComponent, ListGradeComponent, AddGradeComponent, EditGradeComponent, PrintSectionComponent, PrintEleveComponent, UploadImageComponent, DetailsEleveComponent, ListPenaliteComponent, AddPenaliteComponent, EditPenaliteComponent, ListPenaliteEleveComponent, AddPenaliteEleveComponent, EditPenaliteEleveComponent, ListMedicaleComponent, AddMedicaleComponent, EditMedicaleComponent, ListVaccinComponent, AddVaccinComponent, EditVaccinComponent,ListFonctionComponent,EditFonctionComponent,AddFonctionComponent, ListAdministrationComponent, AddAdministrationComponent, EditAdministrationComponent, ListServiceComponent, AddServiceComponent, EditServiceComponent, ListRegimeComponent, AddRegimeComponent, EditRegimeComponent, ListPersonelleComponent, AddPersonelleComponent, EditPersonelleComponent, ListFoyerComponent, AddFoyerComponent, EditFoyerComponent, EditSalleComponent, AddSalleComponent, ListSalleComponent, SuivieSanteComponent, SuivieRepoComponent, SuivieConsultationComponent, SuivieMesureComponent, ListTestpsyComponent, AddTestpsyComponent, EditTestpsyComponent, SuivieTestpsyComponent, ListElvPreSelectionComponent, AcceptElvpreselectionComponent, StatistiqueComponent, RegisterComponent, ListSpecialiteComponent, AddSpecialiteComponent, EditSpecialiteComponent, ListEtatcivilComponent, EditEtatcivilComponent, AddEtatcivilComponent, ListRendezvousComponent, RendezvousTodayComponent],
  imports: [
    RadioButtonModule,
    ChartsModule,
    CommonModule,
    ReactiveFormsModule,
    TableModule,

    CalendarModule,
    ButtonModule,
    InputTextModule,
    ContextMenuModule,
    DropdownModule,
    DialogModule,
    MultiSelectModule,
    SliderModule,
    GrowlModule,
    TabViewModule,
    ToastModule,
    HttpClientModule,
    CodeHighlighterModule,
    DataViewModule,
    PanelModule,
    OrganizationChartModule,
    CarouselModule,
    FormsModule,
    CardModule,
    ConfirmDialogModule,
    /*material*/
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,

    //MatMomentDateModule


     /*material*/
     ExcelExportModule,
    EnprRoutingModule
  ],
  // Enable Right-to-Left mode for Kendo UI components
  providers:    [DatePipe, MessageService, ConfirmationService, { provide: RTL, useValue: true }],

})
export class EnprModule { }
