import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Film} from '../model/film';
import {FormGroup} from '@angular/forms';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

const API_URL = environment.api_url;

@Injectable({providedIn: 'root'})
export class FilmsService {
  public films: Film[] = [];

  constructor(private http: HttpClient) {}

  load(): void {
    this.http.get<Film[]>(API_URL).subscribe(films => this.films = films);
  }

  add(form: FormGroup): Observable<any> {
    return this.http.post(API_URL + '/film/add', form.value);
  }

  getAddPage(): Observable<any> {
    return this.http.get(API_URL + '/film/add');
  }
}
