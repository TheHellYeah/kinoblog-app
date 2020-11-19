import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FilmsService} from '../../service/film.service';
import {AuthService} from '../../service/auth.service';
import {response} from 'express';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  addFilmForm: FormGroup;
  isAvailable = true;

  constructor(private builder: FormBuilder, private filmService: FilmsService, private authService: AuthService, private router: Router) {
    this.addFilmForm = builder.group({
      name: '',

      description: '',
      preview: '',
      trailer: ''
    });
  }

  ngOnInit(): void {
    this.filmService.getAddPage().subscribe();
  }


  onSubmit(): void {
    this.filmService.add(this.addFilmForm).subscribe(resp => {
      this.router.navigate(['/']);
    });
  }
}
