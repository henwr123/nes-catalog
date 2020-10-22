import { Injectable } from '@angular/core';
import { Game } from './game';
import { GAMES } from './mock-games';
import { CATALOG } from './mock-catalog';
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
  getGames(name?: string): Observable<Game[]>{
    if (name){
      return of(CATALOG.filter((game) => game.name.toLowerCase().includes(name.toLowerCase())));
    } else {
      return of(CATALOG);
    }
  }

  /**
   * Get details of a Game by the id
   * @param id - ID of the game to select
   * @returns Game Details of the game
   */
  getGame(id: string): Observable<Game> {
    return of(CATALOG.find(game => game.id === id));
  }
}
