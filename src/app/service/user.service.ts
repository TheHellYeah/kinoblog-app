import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../model/user';

const API_URL = environment.api_url;

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {
  }

  userPage(id: string): Observable<User> {
    return this.http.get<User>(API_URL + '/user/' + id);
  }
}
