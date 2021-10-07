import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];

  selectedGame: Game;

  filterName: string;

  ownedSelectedValue: string;

  sortByProperty: string;

  constructor(private gamesService: GamesService) { }

  onKey(event: any): void {
    this.filterName = event.target.value;
    this.getGames();
    this.sortGames("sortable");
  }

  getGames(): void {
    this.gamesService.getGames(this.filterName, this.ownedSelectedValue)
      .subscribe(games => this.games = games);
  }

    /**
     * Handles the sorting for the games list
     * @param sortProperty 
     */
  sortGames(sortProperty: string): void {

    //this.games.sort((a, b) => a[sortProperty] - b[sortProperty]);

    this.games.sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
    //this.games.sort((a, b) => a.sortable.localeCompare(b.sortable));
  }

  ngOnInit(): void {

    this.ownedSelectedValue = "";

    this.getGames();

    // initially sort game list by name
    this.sortGames("releaseDate");
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }

  onChangeOwned(event: any) : void {
    this.getGames();
  }

}
