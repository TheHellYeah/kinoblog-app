import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ErrorHandlerService implements ErrorHandler {
  private router: Router;

  constructor(private injector: Injector) {
    setTimeout(() => this.router = injector.get(Router));
  }

  handleError(error: HttpErrorResponse): void {
    console.log(error.message);
    this.router.navigate(['/error'], {queryParams: {code: error.status}});
  }
}
