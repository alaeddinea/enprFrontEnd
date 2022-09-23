import { Eleve } from './eleve';
import { Medicale } from './medicale';

export class RepoEleve {
  id?;
  medicale?: Medicale;
  dateDebutRepo?: any;
  dateFinRepo?: any;
  eleve: Eleve;

}
