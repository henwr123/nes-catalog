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
  getGames(search?: string, owned?: string): Observable<Game[]> {

    let ownedOptions = [];

    // Build up the owned options
    if (owned === "") {
      ownedOptions.push(true)
      ownedOptions.push(false)
    } else if (owned === "true") {
      ownedOptions.push(true)
    } else {
      ownedOptions.push(false)
    }

    const CATEGORIES = ['action & adventure', 'arcade', 'educational', 'fighting', 'light-gun', 'party', 'platformer', 'power pad', 'programmable', 'puzzle', 'racing', 'robot', 'rpg', 'shooter', 'sports', 'strategy'];

    if (search != undefined && CATEGORIES.includes(search.toLowerCase())) {
      return of(CATALOG.filter((game) => game.category.toLowerCase().includes(search.toLowerCase()) && ownedOptions.includes(game.owned)));
    } else if (search) {
      return of(CATALOG.filter((game) => game.name.toLowerCase().includes(search.toLowerCase()) && ownedOptions.includes(game.owned)));
    } else {
      return of(CATALOG.filter((game) => ownedOptions.includes(game.owned)));
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
