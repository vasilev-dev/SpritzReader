import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { SpritzComponent } from './components/spritz/spritz.component';
import { RhythmicComponent } from './components/rhythmic/rhythmic.component';
import { CheckDialogComponent } from './components/check-dialog/check-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LaunchComponent } from './components/launch/launch.component';
import {MatListModule} from '@angular/material/list';
import {FormsModule} from '@angular/forms';
import {CheckResultComponent} from './components/check-result/check-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SpritzComponent,
    RhythmicComponent,
    CheckDialogComponent,
    LaunchComponent,
    CheckResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
