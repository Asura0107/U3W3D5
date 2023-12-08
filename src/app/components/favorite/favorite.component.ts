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
  movie: Fav[] | undefined;
  constructor(public prdSrv: ServiceService) {}

  ngOnInit(): void {
    this.recupera();
  }
  recupera() {
    this.sub = this.prdSrv.favList().subscribe((risultato) => {
      // this.movie = risultato;
      console.log(risultato);
    });
  }
}
