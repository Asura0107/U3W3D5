export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  addlist: boolean;
}
export interface Fav {
  movieId: number;
  id: number;
  userId: number;
  poster_path: string;
  title: string;
}
