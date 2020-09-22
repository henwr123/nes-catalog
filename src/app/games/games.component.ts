import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAMES } from '../mock-games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games = GAMES;

  selectedGame: Game;

  constructor() { }

  ngOnInit(): void {
    // initially sort game list by name
    this.games.sort((a, b) => a.name.localeCompare(b.name));
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }

}
