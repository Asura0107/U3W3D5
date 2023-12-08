import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Fav } from 'src/app/models/movie';
import { Movie } from 'src/app/models/movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  sub!: Subscription;
  movie: Fav[] = [];
  constructor(public prdSrv: ServiceService) {}

  ngOnInit(): void {
    this.recupera();
  }
  recupera() {
    const user = localStorage.getItem('user');
    if (user !== null) {
      const userData = JSON.parse(user);
      console.log(userData.user.id);
      this.sub = this.prdSrv
        .favList(userData.user.id)
        .subscribe((risultato) => {
          this.movie = risultato;
          console.log(risultato);
        });
    } else {
      console.log('No user data found in local storage');
    }
  }
}
