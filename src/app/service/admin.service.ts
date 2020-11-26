import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {FormControl, FormGroup} from '@angular/forms';

const API_URL = environment.api_url;

@Injectable({providedIn: 'root'})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  loadBackups(): Observable<any> {
    return this.http.get<any>(API_URL + '/admin/restore');
  }

  restore(backupForm: FormGroup): Observable<any> {
    return this.http.post<any>(API_URL + '/admin/restore', backupForm.value.backup);
  }

  getAdminPage(): Observable<any> {
    return this.http.get<any>(API_URL + '/admin');
  }

  appointToMod(id: bigint): Observable<any> {
    return this.http.put<any>(API_URL + '/admin/appoint-mod', id);
  }

  appointToAdmin(id: bigint): Observable<any> {
    return this.http.put<any>(API_URL + '/admin/appoint-admin', id);
  }

  dismiss(id: bigint): Observable<any> {
    return this.http.put<any>(API_URL + '/admin/dismiss', id);
  }
}
