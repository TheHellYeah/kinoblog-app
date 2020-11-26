import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../service/storage.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl()
  });
  isLoginFailed = false;

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.login(this.loginForm)
      .subscribe(response => {
          this.storageService.saveToken(response.token);
          this.storageService.saveUser(new User(response));
          this.router.navigate(['']).then(() => location.reload());
        },
        error => {
          this.isLoginFailed = true;
        });
  }
}
