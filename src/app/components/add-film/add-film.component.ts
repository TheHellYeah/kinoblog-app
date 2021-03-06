import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FilmsService} from '../../service/film.service';
import {AuthService} from '../../service/auth.service';
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
      length: '',
      releaseYear: '',
      preview: '',
      trailer: '',
      genre: '',
      country: ''
    });
  }

  ngOnInit(): void {
    this.filmService.getAddPage().subscribe(() => {}, () => {
      this.isAvailable = false;
    });
  }


  onSubmit(): void {
    this.filmService.add(this.addFilmForm).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
