import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpritzComponent} from './components/spritz/spritz.component';
import {MenuComponent} from './components/menu/menu.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'spritz',
    component: SpritzComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
