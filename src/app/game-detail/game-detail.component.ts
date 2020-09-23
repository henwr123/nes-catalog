import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input() game: Game;

  selectedGame: Game;

  constructor() { }

  ngOnInit(): void {
    this.game = { 
      id: 'NES-TY-USA', 
      name: '10-Yard Fight', 
      owned: false,
      publisher: 'Nintendo', 
      developer: 'Irem', 
      region: 'NTSC (N. America)', 
      releaseDate: new Date() ,
      esrb: 'Everyone',
      players: '2',
      upc: '045496630270',
      board: 'NES-NROM-256'
    };
  }

}
