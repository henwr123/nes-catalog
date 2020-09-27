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

  constructor(private gamesService: GamesService) { }

  getGames(): void {
    this.gamesService.getGames()
      .subscribe(games => this.games = games);
  }

  ngOnInit(): void {
    this.getGames();
    // initially sort game list by name
    this.games.sort((a, b) => a.name.localeCompare(b.name));
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }

}
