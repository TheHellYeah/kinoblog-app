import { Component } from '@angular/core';
import {AuthService} from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated = true;

  constructor(private authService: AuthService) {
  }
  // TODO

  logout(): void {
    this.authService.logout();
  }
}
