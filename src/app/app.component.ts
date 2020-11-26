import {Component, OnInit} from '@angular/core';
import {AuthService} from './service/auth.service';
import {User} from './model/user';
import {Role} from './model/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAuthenticated = false;
  isModerator = false;
  isAdmin = false;
  user = {} as User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.user;
    if (this.user != null) {
      this.isAuthenticated = true;
      // @ts-ignore
      this.isModerator = this.user.roles.includes('MODERATOR');
      // @ts-ignore
      this.isAdmin = this.user.roles.includes('ADMIN');
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
