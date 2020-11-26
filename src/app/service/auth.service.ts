import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {StorageService} from './storage.service';
import {environment} from '../../environments/environment';

const API_URL = environment.api_url;

@Injectable({providedIn: 'root'})
export class AuthService {
  user: User;

  constructor(private http: HttpClient, private storageService: StorageService) {
    this.user = storageService.getUser();
  }

  login(form: FormGroup): Observable<any> {
    return this.http.post<any>(API_URL + '/login', form.value);
  }

  register(form: FormGroup): Observable<any> {
    return this.http.post<any>(API_URL + '/register', form.value);
  }

  logout(): void {
    this.storageService.clearStorage();
    location.reload();
  }
}
