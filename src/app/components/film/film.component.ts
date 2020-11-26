import {Component, OnInit} from '@angular/core';
import {Film} from '../../model/film';
import {FilmsService} from '../../service/film.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Chart} from 'node_modules/chart.js';
import {Review} from '../../model/review';
import {EnumUtils} from '../../service/enum-utils';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  film: Film = {} as Film;
  noReviews = false;

  reviewForm = new FormGroup({
    description: new FormControl(),
    mark: new FormControl()
  });

  // tslint:disable-next-line:max-line-length
  constructor(private filmService: FilmsService, private route: ActivatedRoute, private sanitizer: DomSanitizer, public enumUtils: EnumUtils) {
  }

  ngOnInit(): void {
    const filmId = this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(filmId).subscribe(response => this.film = response,
      error => {
      },
      () => {
          this.renderChart();
      });
  }

  getVideoUrl(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.film.trailer);
  }

  onSubmit(): void {
    if (this.reviewForm.value.mark != null) {
      this.filmService.addReview(this.reviewForm, this.film.id).subscribe(review => {
        this.film.reviews.push(review);
      });
    }
  }

  renderChart(): void {
    // @ts-ignore
    const context = document.getElementById('my-chart').getContext('2d');
    const myChart = new Chart(context, {
      data: this.getReviewsSummary(this.film.reviews),
      type: 'doughnut'
    });
  }

  getReviewsSummary(reviews: Review[]): any {
    const summary: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    reviews.forEach(review => {
      summary[review.mark - 1] += 1;
    });

    return {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [{
        backgroundColor: ['#ec0005', '#e9282c', '#f54144', '#f17d20', '#eab92c', '#9ecb60', '#7ae252', '#3ca428', '#289f16', '#2d7004'],
        data: summary
      }]
    };
  }
}
