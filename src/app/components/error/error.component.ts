import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ErrorHandlerService} from '../../service/error-handler.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
  }
}
