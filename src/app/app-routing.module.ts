import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpritzComponent} from './components/spritz/spritz.component';
import {MenuComponent} from './components/menu/menu.component';
import {RhythmicComponent} from './components/rhythmic/rhythmic.component';
import {LaunchComponent} from './components/launch/launch.component';
import {CheckResultComponent} from './components/check-result/check-result.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'spritz',
    component: SpritzComponent
  },
  {
    path: 'rhythmic',
    component: RhythmicComponent
  },
  {
    path: 'launch',
    component: LaunchComponent
  },
  {
    path: 'success',
    component: CheckResultComponent
  },
  {
    path: 'failure',
    component: CheckResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
