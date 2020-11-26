import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {User} from '../../model/user';
import {StorageService} from '../../service/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl()
  });
  isRegistrationFailed = false;


  constructor(private builder: FormBuilder, private authService: AuthService,
              private storageService: StorageService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.register(this.registrationForm)
      .subscribe(response => {
        this.storageService.saveToken(response.token);
        this.storageService.saveUser(new User(response));
        this.router.navigateByUrl('/').then(() => location.reload());
      }, () => {
        this.isRegistrationFailed = true;
      });
  }
}
