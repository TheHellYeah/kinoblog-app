import {Role} from './role';

export class User {
  id: bigint;
  username: string;
  email: string;
  registration: Date;
  avatar: string;
  roles: Role[];

  constructor(data: any) {
    this.username = data.username;
    this.email = data.email;
    this.registration = data.registration;
    this.avatar = data.avatar;
    this.roles = data.roles;
  }
}
