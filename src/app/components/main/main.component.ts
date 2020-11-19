import {Component, OnInit} from '@angular/core';
import {FilmsService} from '../../service/film.service';
import {Film} from '../../model/film';
import {Router} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public films: Film[] = [];

  constructor(public filmService: FilmsService, public router: Router) {
  }

  ngOnInit(): void {
    this.filmService.getMainPage().subscribe(films => this.films = films);
  }
}

