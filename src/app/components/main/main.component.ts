import { Component, OnInit } from '@angular/core';
import {FilmsService} from '../../service/film.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public filmService: FilmsService) { }

  ngOnInit(): void {
    this.filmService.load();
  }
}
