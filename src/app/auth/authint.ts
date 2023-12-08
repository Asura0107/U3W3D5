export interface Authint {
  accessToken: string;
  user: {
    id: number;
    email: string;
    nome: string;
    cognome: string;
  };
}
