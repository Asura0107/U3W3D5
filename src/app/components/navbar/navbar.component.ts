import { Component, OnInit } from '@angular/core';
import { Authint } from 'src/app/auth/authint';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  utente!: Authint | null;
  constructor(private authSrv: AuthserviceService) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((_user) => {
      this.utente = _user;
    });
  }
}
