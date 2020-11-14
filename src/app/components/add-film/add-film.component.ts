import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FilmsService} from '../../service/film.service';
import {AuthService} from '../../service/auth.service';


@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  addFilmForm: FormGroup;
  isAvailable = true;

  constructor(private builder: FormBuilder, private filmService: FilmsService, private authService: AuthService) {
    this.addFilmForm = builder.group({
      name: ''
    });
  }

  ngOnInit(): void {
    this.filmService.getAddPage().subscribe();
  }


  onSubmit(): void {
    this.filmService.add(this.addFilmForm).subscribe();
  }
}
