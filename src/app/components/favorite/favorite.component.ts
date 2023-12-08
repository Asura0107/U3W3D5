import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Fav } from 'src/app/models/movie';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  constructor(public prdSrv: ServiceService) {}

  ngOnInit(): void {}
}
