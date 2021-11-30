import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './game';
import { Category } from './data/category';
import { CategoryResults } from './data/category-results';
import { GAMES } from './mock-games';
import { CATALOG } from './mock-catalog';
import { CATEGORIES } from './data/mock-category';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  SERVER_URL: string = "http://localhost:3000/"

  /**
   * Create a GameService instance
   */
  constructor(private http: HttpClient) { }


  getCategories(): Observable<Category> {
    return this.http.get<CategoryResults>(this.SERVER_URL + "categories")
  }

  /**
   * Get the list of games
   * @return Array of games
   */
  getGames(search?: string, owned?: string, category?: string): Observable<Game[]> {

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


    let categoryOptions = [];

    if (category === "" ) {
      for(let i = 0; i < CATEGORIES.results.length; i++){
        categoryOptions.push(CATEGORIES.results[i].name.toLowerCase());
      }
    } else {
      categoryOptions.push(category.toLowerCase());
    }


    if (search !== undefined) {
      return of(CATALOG.filter((game) => ( game.name.toLowerCase().includes(search.toLowerCase()) && ownedOptions.includes(game.owned) && categoryOptions.includes(game.category.toLowerCase()) )));
    } else {
      return of(CATALOG.filter((game) => ( ownedOptions.includes(game.owned) && categoryOptions.includes(game.category.toLowerCase()) )));
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
