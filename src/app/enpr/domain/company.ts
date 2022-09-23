import { Session } from './session';
import { Group } from './group';

export class Company {
    id?;
    session: Session;
    group : Group;

    numCompany: number;
    commandCompany: String;
}