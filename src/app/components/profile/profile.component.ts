import { Component, OnInit } from '@angular/core';
import { Authint } from 'src/app/auth/authint';
import { AuthserviceService } from 'src/app/auth/authservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.autSrv.restore();
    const user = localStorage.getItem('user');
    if (user !== null) {
      const userData = JSON.parse(user);
      console.log(userData.user.nome);
      const nome = userData.user.nome;
      const email = userData.user.email;
      let div = document.querySelector('.profilo') as HTMLElement;
      div.innerHTML = `<p>user: ${nome}</p>
      <p>email: ${email}</p>`;
    }
  }
}
