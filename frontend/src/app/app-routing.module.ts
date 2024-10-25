import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LivescoreComponent } from './components/livescore/livescore.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PointstableComponent } from './components/pointstable/pointstable.component';
import { PlayersComponent } from './components/players/players.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'livescore', component:LivescoreComponent
  },
  {
    path:'matches', component:MatchesComponent
  },
  {
    path:'pointstable', component:PointstableComponent
  },
  {
    path:'players', component:PlayersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
