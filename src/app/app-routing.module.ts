import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'catalog', component: GamesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }