import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  games: Game[] = [];

  ngOnInit(): void {
  }

}
