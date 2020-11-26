import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Film} from '../model/film';
import {FormGroup} from '@angular/forms';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

const API_URL = environment.api_url;

@Injectable({providedIn: 'root'})
export class FilmsService {

  constructor(private http: HttpClient) {}

  getMainPage(): Observable<any> {
    return this.http.get(API_URL);
  }

  add(form: FormGroup): Observable<any> {
    return this.http.post(API_URL + '/film/add', form.value);
  }

  getAddPage(): Observable<any> {
    return this.http.get(API_URL + '/film/add');
  }

  getFilm(id: string): Observable<Film> {
    return this.http.get<Film>(API_URL + '/film/' + id);
  }

  addReview(form: FormGroup, filmId: bigint): Observable<any> {
    return this.http.post<any>(API_URL + '/film/' + filmId + '/review', form.value);
  }

  filter(filterForm: FormGroup): Observable<any> {
    Object.keys(filterForm.value).forEach((key) => {
      if (filterForm.value[key] == null) {
        delete filterForm.value[key];
      }
    });
    return this.http.get(API_URL, {params: filterForm.value});
  }
}
