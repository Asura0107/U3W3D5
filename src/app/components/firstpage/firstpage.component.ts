import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';
import { Movie, Fav } from 'src/app/models/movie';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss'],
})
export class FirstpageComponent implements OnInit {
  sub!: Subscription;
  movie: Movie[] | undefined;
  constructor(private userSrv: ServiceService) {}

  ngOnInit(): void {
    this.recupera();
  }
  recupera() {
    this.sub = this.userSrv.getproducts().subscribe((risultato) => {
      this.movie = risultato;
      console.log(risultato);
    });
  }
  addToFavs() {}
}
