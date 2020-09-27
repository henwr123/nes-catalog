import { Injectable } from '@angular/core';
import { Game } from './game';
import { GAMES } from './mock-games';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getGames(): Observable<Game[]>{
    return of(GAMES);
  }

  getGame(id: string): Observable<Game> {
    return of(GAMES.find(game => game.id === id));
  }
}
