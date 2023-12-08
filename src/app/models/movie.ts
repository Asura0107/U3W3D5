export interface Movie {
  id: number;
  poster_path: string;
  title: string;
}
export interface Fav {
  movieId: number;
  id: number;
  userId: number;
}
