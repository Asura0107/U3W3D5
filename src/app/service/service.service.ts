import { Injectable } from '@angular/core';
import { Movie, Fav } from '../models/movie';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url = environment.apiURL;
  constructor(private http: HttpClient) {}
  getproducts() {
    return this.http.get<Movie[]>(`${this.url}/movies-popular`);
  }

  addToFavs() {}
  favList() {}
}
