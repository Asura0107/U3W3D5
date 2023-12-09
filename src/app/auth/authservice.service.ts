import { Injectable } from '@angular/core';
import { Authint } from './authint';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError, tap, catchError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  jwtHelper = new JwtHelperService();
  apiURL = environment.apiURL;
  private authSubj = new BehaviorSubject<null | Authint>(null);
  user$ = this.authSubj.asObservable();
  utente!: Authint;
  constructor(private http: HttpClient, private router: Router) {}
  getname() {
    return this.utente.user.nome;
  }
  login(data: { email: string; password: string }) {
    return this.http.post<Authint>(`${this.apiURL}/login`, data).pipe(
      tap((loggato) => {
        // console.log(loggato);
        this.authSubj.next(loggato);
        this.utente = loggato;
        // console.log(this.utente);
        localStorage.setItem('user', JSON.stringify(loggato));
        console.log(this.user$);
        console.log(localStorage);
        this.router.navigate(['/firstpage']);
      }),
      catchError(this.errors)
    );
  }
  getuserid() {
    return this.utente.user.id;
  }
  getnome() {
    return this.utente.user.nome;
  }
  restore() {
    const user = localStorage.getItem('user');
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }
    const userData: Authint = JSON.parse(user);
    if (this.jwtHelper.isTokenExpired(userData.accessToken)) {
      this.router.navigate(['/login']);
      return;
    }
    this.authSubj.next(userData);
  }

  register(data: {
    nome: string;
    cognome: string;
    email: string;
    password: string;
  }) {
    return this.http.post(`${this.apiURL}/register`, data).pipe(
      tap(() => {
        this.router.navigate(['/login']);
      }),
      catchError(this.errors)
    );
  }

  private errors(err: any) {
    console.log(err);
    switch (err.error) {
      case 'Email already exists':
        return throwError('Email già registrata');
        break;

      case 'Email format is invalid':
        return throwError('Formato mail non valido');
        break;

      case 'Cannot find user':
        return throwError('Utente inesistente');
        break;

      default:
        return throwError('Errore nella chiamata');
        break;
    }
  }

  logout() {
    this.authSubj.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
