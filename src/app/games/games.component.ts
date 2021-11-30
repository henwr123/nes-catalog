import { Component, OnInit } from '@angular/core';
import { Category } from '../data/category';
import { Game } from '../game';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  
  /**
   * The list of games from the API call. It will be initialed loaded in
   * the onInit event and will be updated as the filtering criteria are
   * changed
   */
  games: Game[] = [];

  categories: Category;

  // represents the game that was selected for migration to the details
  selectedGame: Game;

  // maintains the user's input for the search criteria
  filterName: string;

  // maintained the user's selection for the "owned" filter
  ownedSelectedValue: string;

  categorySelectedValue: string;


  constructor(private gamesService: GamesService) { }

  /**
   * Handles the search parameter keyboard event. As the user types in the
   * search box, the filter for name is updated and the games list is 
   * refreshed.
   * @param event keyboard event
   */
  onKey(event: any): void {
    this.filterName = event.target.value;
    this.getGames();
    this.sortGames("sortable");
  }

  /**
   * Calls the game service to get the games based upon the filtering criteria. The 
   * data for the list is updated from the resulting service call
   */
  getGames(): void {
    this.gamesService.getGames(this.filterName, this.ownedSelectedValue, this.categorySelectedValue)
      .subscribe(games => this.games = games);
  }

  getCategories(): void {
    this.gamesService.getCategories().subscribe(
      (response) => {
        this.categories = response
        this.categories.results.sort((a, b) => a.name.localeCompare(b.name))
      });
  }

  /**
   * Handles the sorting for the games list
   * @param sortProperty 
   */
  sortGames(sortProperty: string): void {

    //this.games.sort((a, b) => a[sortProperty] - b[sortProperty]);

    this.games.sort((a, b) => a[sortProperty].toString().localeCompare(b[sortProperty].toString()));
    //this.games.sort((a, b) => a.sortable.localeCompare(b.sortable));
  }

  /**
   * The initial load of the screen to set defaults and inital load of
   * the game list
   */
  ngOnInit(): void {

    this.ownedSelectedValue = "";

    this.categorySelectedValue = "";

    this.getCategories();

    this.getGames();

    // initially sort game list by name
    this.sortGames("sortable");
  }

  /**
   * Handles the event of selecting a game from the list
   * @param game Selected game object
   */
  onSelect(game: Game): void {
    this.selectedGame = game;
  }

  /**
   * Handles the change in the state of the "owned" select option. We need to 
   * trigger a reload of the games list based upon the new parameter selection.
   * @param event event objects
   */
  onChangeOwned(event: any) : void {
    this.getGames();
    this.sortGames("sortable");
  }

  onChangeCategory(event: any) : void {
    this.getGames();
    this.sortGames("sortable");
  }

}
