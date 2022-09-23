import { Session } from './session';
import { Group } from './group';
import { Company } from './company';

export class Section {
    id?;
    session: Session;
    group : Group;
    company: Company
    numSection: number;
    commandSection: String;
}