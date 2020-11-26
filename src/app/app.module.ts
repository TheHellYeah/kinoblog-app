import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {MainComponent} from './components/main/main.component';
import {FilmComponent} from './components/film/film.component';
import {RouterModule, Routes} from '@angular/router';
import {AddFilmComponent} from './components/add-film/add-film.component';
import {BackupComponent} from './components/backup/backup.component';
import {UserComponent} from './components/user/user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './security/auth.interceptor';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorComponent} from './components/error/error.component';
import { AdminComponent } from './components/admin/admin.component';
import {ErrorHandlerService} from './service/error-handler.service';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'add', component: AddFilmComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/restore', component: BackupComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'film/:id', component: FilmComponent},
  {path: '*', component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainComponent,
    FilmComponent,
    AddFilmComponent,
    BackupComponent,
    UserComponent,
    ErrorComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    //   {provide: ErrorHandler, useClass: ErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
