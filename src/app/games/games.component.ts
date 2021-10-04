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

  constructor(private gamesService: GamesService) { }

  onKey(event: any): void {
    this.filterName = event.target.value;
    this.getGames();
    this.games.sort((a, b) => a.sortable.localeCompare(b.sortable));
  }

  getGames(): void {
    this.gamesService.getGames(this.filterName, this.ownedSelectedValue)
      .subscribe(games => this.games = games);
  }

  ngOnInit(): void {

    this.ownedSelectedValue = "";

    this.getGames();
    // initially sort game list by name
    this.games.sort((a, b) => a.sortable.localeCompare(b.sortable));
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }

  onChangeOwned(event: any) : void {
    this.getGames();
  }

}
