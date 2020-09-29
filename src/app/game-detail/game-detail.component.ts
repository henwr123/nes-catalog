import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game';
import { GamesService } from '../games.service';
// import { JsBarcode } from 'jsbarcode';
// import * as BarCode from 'jsbarcode';

declare let JsBarcode: any;

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit, AfterViewInit {

  // @Input() game: Game;

  game: Game;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
    ) {}

  ngOnInit(): void {

    this.getHero();

  }

  ngAfterViewInit(): void {

    JsBarcode('#upc', this.game.upc, { format: 'upc' });
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.gamesService.getGame(id)
      .subscribe(game => this.game = game);
  }


}
