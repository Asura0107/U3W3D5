import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';
import { Movie, Fav } from 'src/app/models/movie';
// import { AuthserviceService } from 'src/app/auth/authservice.service';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss'],
})
export class FirstpageComponent implements OnInit {
  sub!: Subscription;
  movie: Movie[] | undefined;
  fav!: Fav[];
  constructor(
    private userSrv: ServiceService // private aut: AuthserviceService
  ) {}

  ngOnInit(): void {
    this.recupera();
  }
  recupera() {
    this.sub = this.userSrv.getproducts().subscribe((risultato) => {
      this.movie = risultato;
      console.log(risultato);
    });
  }
  addToFavs(id: number) {
    // const userId = this.aut.getuserid();
    const user = localStorage.getItem('user');
    if (user !== null) {
      const userData = JSON.parse(user);
      console.log(userData.user.id);
      this.userSrv.addToFavs(userData.user.id, id).subscribe((hope) => {
        // this.fav.push(hope);
        console.log(hope);
      });
      console.log(this.fav);
    } else {
      console.log('No user data found in local storage');
    }
  }
}
