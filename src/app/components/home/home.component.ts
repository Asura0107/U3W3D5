import { Component, OnInit } from '@angular/core';
import { Authint } from 'src/app/auth/authint';
import { AuthserviceService } from 'src/app/auth/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  utente!: Authint | null;
  constructor(private router: Router, private authSrv: AuthserviceService) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((_user) => {
      this.utente = _user;
    });
  }
  getpage() {
    return this.router.navigate(['/firstpage']);
  }
}
