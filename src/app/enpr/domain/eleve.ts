import { Grade } from './grade';
import { Gouvernorat } from './gouvernorat';
import { Delegation } from './delegation';

import { Group } from './group';
import { Session } from './session';
import { Company } from './company';
import { Section } from './section';
import { Time } from '@angular/common';
import { Specialite } from './specialite';
import { Etatcivil } from './etatcivil';

export class Eleve {
    id?;
    img: any;
    cinEl: number;
    dateCinEl: Date;
    prenomEl: String;
    nomEl: String;
    datenaissanceEl: Date;
    lieuNaissanceEl: String;
    mailEl: String;
    telFamilleEl: String;
    fixeFamilleEl: String;
    telEl: String;
    imageEl: any;
    fileName: String;
    numDossierRecrueEl: number;
    categorie: String;
    grade: Grade;
    specialite:Specialite;
    etatcivil : Etatcivil;
    gouvernorat: Gouvernorat;
    delegation: Delegation;
    rueEl: String;
    codePostaleEl: number;
    zonePoliceEl: String;
    centralPoliceEl: String;
    nivScolaireEl: String;
    diplomeEl: String;
    stagesEl: String;
    etatMilitaireEl: String;
    passionEl: String;
    activiteSportifEl: String;
    associationEl: String;
    identitePereEl: String;
    identiteMereEl: String;
    fonctionPereEl: String;
    societePereEl: String;
    session: Session;
    group: Group;
    company: Company;
    section: Section;
    selectedFile: any;
    imageModelId: any;
    datenterEl: Date;
    timeEnterEl: Time;
    sexeEl: String;

}


	