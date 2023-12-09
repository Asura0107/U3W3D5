export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  addlist: boolean;
  vote_average: number;
}
export interface Fav {
  movieId: number;
  id: number;
  userId: number;
  poster_path: string;
  title: string;
  vote_average: number;
}
