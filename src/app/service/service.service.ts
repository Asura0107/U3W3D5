import { Injectable } from '@angular/core';
import { Movie, Fav } from '../models/movie';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthserviceService } from '../auth/authservice.service';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  favs: Fav[] = [];
  movie!: Movie;
  url = environment.apiURL;
  constructor(private http: HttpClient, private aut: AuthserviceService) {}
  getproducts() {
    return this.http.get<Movie[]>(`${this.url}/movies-popular`);
  }
  getmovieid() {
    return this.movie.id;
  }

  addToFavs(userId: number, movieId: number, poster_path: string) {
    return this.http.post<Fav>(`${this.url}/favorites`, {
      userId,
      movieId,
      poster_path,
    });
  }
  favList(userId: number) {
    return this.http.get<Fav[]>(`${this.url}/favorites?userId=${userId}`);
  }

  removeFromFav(id: number) {
    console.log('Removing from favorites. ID:', id);
    const url = `${this.url}/favorites/${id}`;

    return this.http.delete<Fav>(url).pipe(
      map((response) => {
        console.log('Successfully removed from favorites:', response);
        return response;
      }),
      catchError((error) => {
        console.error('Error removing from favorites:', error);
        throw error;
      })
    );
  }
}
