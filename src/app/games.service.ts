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
  getGames(search?: string): Observable<Game[]> {

    const CATEGORIES = ['action & adventure', 'arcade', 'educational', 'fighting', 'light-gun', 'party', 'platformer', 'power pad', 'programmable', 'puzzle', 'racing', 'robot', 'rpg', 'shooter', 'sports', 'strategy'];

    if (search != undefined && CATEGORIES.includes(search.toLowerCase())) {
      return of(CATALOG.filter((game) => game.category.toLowerCase().includes(search.toLowerCase())));
    } else if (search) {
      return of(CATALOG.filter((game) => game.name.toLowerCase().includes(search.toLowerCase())));
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
