import {Role} from './role';
import {Review} from './review';

export class User {
  id: bigint;
  username: string;
  email: string;
  registration: Date;
  avatar: string;
  roles: Role[];
  reviews: Review[];

  constructor(data: any) {
    this.id = data.id;
    this.username = data.username;
    this.email = data.email;
    this.registration = data.registration;
    this.avatar = data.avatar;
    this.roles = data.roles;
  }
}

