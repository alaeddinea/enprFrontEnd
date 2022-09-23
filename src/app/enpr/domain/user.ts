import { Personelle } from './personelle';

export class User {
    id?;
    username: string;
    personelle: Personelle;
    role: string[];
    password: string;
  
}