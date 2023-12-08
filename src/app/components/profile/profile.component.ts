import { Component, OnInit } from '@angular/core';
import { Authint } from 'src/app/auth/authint';
import { AuthserviceService } from 'src/app/auth/authservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  utente!: Authint[];

  constructor(private autSrv: AuthserviceService) {}

  ngOnInit(): void {
    this.autSrv.restore();
  }
}
