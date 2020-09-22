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
    this.games.sort();
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }

}
