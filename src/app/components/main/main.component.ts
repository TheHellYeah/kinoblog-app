import {Component, OnInit} from '@angular/core';
import {FilmsService} from '../../service/film.service';
import {Film} from '../../model/film';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Genre} from '../../model/genre';
import {Country} from '../../model/country';
import {EnumUtils} from '../../service/enum-utils';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public films: Film[] = [];

  filterForm = new FormGroup({
    yearFrom: new FormControl(),
    yearTo: new FormControl(),
    country: new FormControl(),
    genre: new FormControl()
  });

  constructor(public filmService: FilmsService, public router: Router, public enumUtils: EnumUtils) {
  }

  ngOnInit(): void {
    this.filmService.getMainPage().subscribe(films => {
      this.films = films;
    });
  }

  onSubmit(): void {
    this.filmService.filter(this.filterForm).subscribe(films => this.films = films);
  }

  clearFilter(): void {
    this.filterForm.reset();
    this.filmService.getMainPage().subscribe(films => this.films = films);
  }
}

