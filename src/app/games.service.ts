import { Injectable } from '@angular/core';
import { Game } from './game';
import { GAMES } from './mock-games';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  /**
   * Create a GameService instance
   */
  constructor() { }

  /**
   * Get the list of games
   * @return Array of games
   */
  getGames(): Observable<Game[]>{
    return of(GAMES);
  }

  /**
   * Get details of a Game by the id
   * @param {string} id - ID of the game to select
   * @returns Game Details of the game
   */
  getGame(id: string): Observable<Game> {
    return of(GAMES.find(game => game.id === id));
  }
}
