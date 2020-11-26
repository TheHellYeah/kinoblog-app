import {Injectable} from '@angular/core';
import {Genre} from '../model/genre';
import {Country} from '../model/country';

@Injectable({providedIn: 'root'})
export class EnumUtils {

  public transformGenreToString(genre: Genre): string {
    switch (genre.toString()) {
      case 'COMEDY': return 'Комедия';
      case 'DETECTIVE': return 'Детектив';
      case 'DRAMA': return 'Драма';
      case 'FANTASTIC': return 'Фантастика';
      case 'HISTORICAL': return 'Исторический';
      case 'HORROR': return 'Ужасы';
      case 'THRILLER': return 'Боевик';
      case 'WAR': return 'Военный';
      case 'CARTOON': return 'Мультфильмы';
    }
  }

  public transformCountryToString(country: Country): string {
    switch (country.toString()) {
      case 'USA': return 'США';
      case 'RUSSIA': return 'Россия';
      case 'CANADA': return 'Канада';
      case 'FRANCE': return 'Франция';
      case 'GERMANY': return 'Германия';
    }
  }
}
