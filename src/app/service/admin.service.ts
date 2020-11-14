import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = environment.api_url;

@Injectable({providedIn: 'root'})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  loadBackups(): Observable<any> {
    return this.http.get<any>(API_URL + '/admin/restore');
  }

  restore(backupName: string): void {
    this.http.post<any>(API_URL + '/admin/restore', backupName).subscribe();
  }
}
