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
  addedtolist: boolean = false;

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

  remove(id: number) {
    console.log(id);
    this.prdSrv.removeFromFav(id).subscribe((risultato) => {
      console.log(risultato);
      // dopo aver rimosso l'id, il filter si va a riprendere tutti gli elelmenti che hanno l'id diverso da quello selezionato ed aggiorna l'arry
      this.movie = this.movie.filter((favorite) => favorite.id !== id);
    });
  }
}
