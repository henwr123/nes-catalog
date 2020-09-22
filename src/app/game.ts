export interface Game {
    id: string;
    name: string;
    developer?: string;
    publisher?: string;
    region?: string;
    releaseDate?: Date;
    esrb?: string;
    players?: string;
    upc?: string;
    board?: string;
    owned?: boolean;
  }
