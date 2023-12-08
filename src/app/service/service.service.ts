import { Injectable } from '@angular/core';
import { Movie, Fav } from '../models/movie';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthserviceService } from '../auth/authservice.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  favs: Fav[] = [];
  url = environment.apiURL;
  constructor(private http: HttpClient, private aut: AuthserviceService) {}
  getproducts() {
    return this.http.get<Movie[]>(`${this.url}/movies-popular`);
  }

  addToFavs() {}
  favList() {
    return this.http.get<Fav[]>(
      `${this.url}/favorites?userId=${this.aut.getuserid()}`
    );
  }
}
