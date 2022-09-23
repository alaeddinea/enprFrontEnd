import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSessionComponent } from './session/list-session/list-session.component';
import { ListGroupComponent } from './group/list-group/list-group.component';
import { AddSessionComponent } from './session/add-session/add-session.component';
import { EditGroupComponent } from './group/edit-group/edit-group.component';
import { AddGroupComponent } from './group/add-group/add-group.component';
import { ListCompanyComponent } from './company/list-company/list-company.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { EditSessionComponent } from './session/edit-session/edit-session.component';
import { ListSectionComponent } from './section/list-section/list-section.component';
import { AddSectionComponent } from './section/add-section/add-section.component';
import { EditSectionComponent } from './section/edit-section/edit-section.component';
import { OrganiComponent } from './organigram/organi/organi.component';
import { ListEleveComponent } from './eleve/list-eleve/list-eleve.component';
import { AddEleveComponent } from './eleve/add-eleve/add-eleve.component';
import { EditEleveComponent } from './eleve/edit-eleve/edit-eleve.component';
import { ListGouvernoratComponent } from './gouvernorat/list-gouvernorat/list-gouvernorat.component';
import { AddGouvernoratComponent } from './gouvernorat/add-gouvernorat/add-gouvernorat.component';
import { EditGouvernoratComponent } from './gouvernorat/edit-gouvernorat/edit-gouvernorat.component';
import { ListDelegationComponent } from './delegation/list-delegation/list-delegation.component';
import { AddDelegationComponent } from './delegation/add-delegation/add-delegation.component';
import { EditDelegationComponent } from './delegation/edit-delegation/edit-delegation.component';
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
import { ListPenaliteEleveComponent } from './eleve/penalite/list-penalite-eleve/list-penalite-eleve.component';
import { AddPenaliteEleveComponent } from './eleve/penalite/add-penalite-eleve/add-penalite-eleve.component';
import { EditPenaliteEleveComponent } from './eleve/penalite/edit-penalite-eleve/edit-penalite-eleve.component';
import { ListMedicaleComponent } from './medicale/list-medicale/list-medicale.component';
import { EditMedicaleComponent } from './medicale/edit-medicale/edit-medicale.component';
import { AddMedicaleComponent } from './medicale/add-medicale/add-medicale.component';
import { ListVaccinComponent } from './vaccin/list-vaccin/list-vaccin.component';
import { AddVaccinComponent } from './vaccin/add-vaccin/add-vaccin.component';
import { EditVaccinComponent } from './vaccin/edit-vaccin/edit-vaccin.component';
import { ListFonctionComponent } from './fonction/list-fonction/list-fonction.component';
import { AddFonctionComponent } from './fonction/add-fonction/add-fonction.component';
import { EditFonctionComponent } from './fonction/edit-fonction/edit-fonction.component';
import { ListAdministrationComponent } from './administration/list-administration/list-administration.component';
import { AddAdministrationComponent } from './administration/add-administration/add-administration.component';
import { EditAdministrationComponent } from './administration/edit-administration/edit-administration.component';
import { AddServiceComponent } from './service/add-service/add-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { ListRegimeComponent } from './regime/list-regime/list-regime.component';
import { AddRegimeComponent } from './regime/add-regime/add-regime.component';
import { EditRegimeComponent } from './regime/edit-regime/edit-regime.component';
import { ListPersonelleComponent } from './personelle/list-personelle/list-personelle.component';
import { AddPersonelleComponent } from './personelle/add-personelle/add-personelle.component';
import { EditPersonelleComponent } from './personelle/edit-personelle/edit-personelle.component';
import { ListSalleComponent } from './salle/list-salle/list-salle.component';
import { AddSalleComponent } from './salle/add-salle/add-salle.component';
import { EditSalleComponent } from './salle/edit-salle/edit-salle.component';
import { ListFoyerComponent } from './foyer/list-foyer/list-foyer.component';
import { AddFoyerComponent } from './foyer/add-foyer/add-foyer.component';
import { EditFoyerComponent } from './foyer/edit-foyer/edit-foyer.component';
import { SuivieSanteComponent } from './eleve/sante/suivie-sante/suivie-sante.component';
import { SuivieRepoComponent } from './eleve/repo/suivie-repo/suivie-repo.component';
import { SuivieConsultationComponent } from './eleve/consultation/suivie-consultation/suivie-consultation.component';
import { ListTestpsyComponent } from './testpsy/list-testpsy/list-testpsy.component';
import { AddTestpsyComponent } from './testpsy/add-testpsy/add-testpsy.component';
import { EditTestpsyComponent } from './testpsy/edit-testpsy/edit-testpsy.component';
import { SuivieTestpsyComponent } from './eleve/testpsy/suivie-testpsy/suivie-testpsy.component';
import { SuivieMesureComponent } from './eleve/mesure/suivie-mesure/suivie-mesure.component';
import { ListElvPreSelectionComponent } from './elvpreselection/list-elv-pre-selection/list-elv-pre-selection.component';
import { AcceptElvpreselectionComponent } from './elvpreselection/accept-elvpreselection/accept-elvpreselection.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { RegisterComponent } from './register/register.component';
import { ListSpecialiteComponent } from './specialite/list-specialite/list-specialite.component';
import { AddSpecialiteComponent } from './specialite/add-specialite/add-specialite.component';
import { EditSpecialiteComponent } from './specialite/edit-specialite/edit-specialite.component';
import { ListEtatcivilComponent } from './etatcivil/list-etatcivil/list-etatcivil.component';
import { AddEtatcivilComponent } from './etatcivil/add-etatcivil/add-etatcivil.component';
import { EditEtatcivilComponent } from './etatcivil/edit-etatcivil/edit-etatcivil.component';
import { RendezvousTodayComponent } from './eleve/rendezvous/rendezvous-today/rendezvous-today.component';


const routes: Routes = [ {path: '', data: {title: 'enpr'},
children: [
  {path:"list-session" , component: ListSessionComponent },
  {path:"add-session" , component: AddSessionComponent },
  {path:"edit-session" , component: EditSessionComponent },

  {path:"list-group" , component: ListGroupComponent },
  {path:"add-group" , component: AddGroupComponent },
  {path:"edit-group" , component: EditGroupComponent },

  {path:"list-company" , component: ListCompanyComponent },
  {path:"add-company" , component: AddCompanyComponent },
  {path:"edit-company" , component: EditCompanyComponent },

  {path:"list-section" , component: ListSectionComponent },
  {path:"add-section" , component: AddSectionComponent },
  {path:"edit-section" , component: EditSectionComponent },
  {path:"print-section" , component: PrintSectionComponent },


  {path:"organi" , component: OrganiComponent },


  {path:"list-eleve" , component: ListEleveComponent },
  {path:"add-eleve" , component: AddEleveComponent },
  {path:"edit-eleve" , component: EditEleveComponent },
  {path:"print-eleve" , component: PrintEleveComponent },
  {path:"upload-image" , component: UploadImageComponent },
  {path:"details-eleve" , component: DetailsEleveComponent },
  {path:"list-medicale" , component: ListMedicaleComponent },
  {path:"list-gouvernorat" , component: ListGouvernoratComponent },
  {path:"add-gouvernorat" , component: AddGouvernoratComponent },
  {path:"edit-gouvernorat" , component: EditGouvernoratComponent },
  {path:"suivie-sante" , component: SuivieSanteComponent },
  {path:"rendezvous-today" , component:RendezvousTodayComponent  },
  {path:"suivie-consultation" , component: SuivieConsultationComponent },
  {path:"suivie-testpsy" , component: SuivieTestpsyComponent },
  {path:"suivie-mesure" , component: SuivieMesureComponent },

  {path:"list-delegation" , component: ListDelegationComponent },
  {path:"add-delegation" , component: AddDelegationComponent },
  {path:"edit-delegation" , component: EditDelegationComponent },


  {path:"list-grade" , component: ListGradeComponent },
  {path:"add-grade" , component: AddGradeComponent },
  {path:"edit-grade" , component: EditGradeComponent },

  {path:"list-specialite" , component: ListSpecialiteComponent },
  {path:"add-specialite" , component: AddSpecialiteComponent },
  {path:"edit-specialite" , component: EditSpecialiteComponent },

  {path:"list-etatcivil" , component:ListEtatcivilComponent },
  {path:"add-etatcivil" , component: AddEtatcivilComponent },
  {path:"edit-etatcivil" , component: EditEtatcivilComponent },


  {path:"list-penalite" , component: ListPenaliteComponent },
  {path:"add-penalite" , component: AddPenaliteComponent },
  {path:"edit-penalite" , component: EditPenaliteComponent },


  {path:"list-penalite-eleve" , component: ListPenaliteEleveComponent },
  {path:"add-penalite-eleve" , component: AddPenaliteEleveComponent },
  {path:"edit-penalite-eleve" , component: EditPenaliteEleveComponent },

  {path:"list-medicale" , component: ListMedicaleComponent },
  {path:"add-medicale" , component: AddMedicaleComponent },
  {path:"edit-medicale" , component: EditMedicaleComponent },

  {path:"list-vaccin" , component: ListVaccinComponent },
  {path:"add-vaccin" , component: AddVaccinComponent },
  {path:"edit-vaccin" , component: EditVaccinComponent },

  {path:"list-fonction" , component: ListFonctionComponent },
  {path:"add-fonction" , component: AddFonctionComponent },
  {path:"edit-fonction" , component: EditFonctionComponent },


  {path:"list-administration" , component: ListAdministrationComponent },
  {path:"add-administration" , component: AddAdministrationComponent },
  {path:"edit-administration" , component: EditAdministrationComponent },


  {path:"list-service" , component: ListServiceComponent },
  {path:"add-service" , component: AddServiceComponent },
  {path:"edit-service" , component: EditServiceComponent },

  {path:"list-regime" , component: ListRegimeComponent },
  {path:"add-regime" , component: AddRegimeComponent },
  {path:"edit-regime" , component: EditRegimeComponent },


  {path:"list-personelle" , component: ListPersonelleComponent },
  {path:"add-personelle" , component: AddPersonelleComponent },
  {path:"edit-personelle" , component: EditPersonelleComponent },

  {path: 'list-foyer' , component: ListFoyerComponent },
  {path: 'add-foyer' , component: AddFoyerComponent },
  {path: 'edit-foyer' , component: EditFoyerComponent},


  {path: 'list-salle' , component: ListSalleComponent },
  {path: 'add-salle' , component: AddSalleComponent },
  {path: 'edit-salle' , component: EditSalleComponent },


  {path: 'list-testpsy' , component: ListTestpsyComponent },
  {path: 'add-testpsy' , component: AddTestpsyComponent },
  {path: 'edit-testpsy' , component: EditTestpsyComponent },

  {path: 'list-elv-pre-selection' , component: ListElvPreSelectionComponent },
  {path: 'accept-elvpreselection' , component: AcceptElvpreselectionComponent },
   {path: 'statistique' , component: StatistiqueComponent },

   {path: 'register' , component: RegisterComponent },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnprRoutingModule { }
