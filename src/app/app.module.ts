import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RandmsvgComponent } from './home-svgtemplate/randmsvg/randmsvg.component';
import { CharCardComponent } from './components/char-card/char-card.component';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CharacterdataService } from './services/characterdata.service';
import { SearchbarService } from './services/searchbar.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [BrowserModule, FormsModule, MatIconModule, HttpClientModule ],
  declarations: [
    AppComponent,
    RandmsvgComponent,
    CharCardComponent,
    HomecomponentComponent,
    SearchbarComponent,
  ],
  bootstrap: [AppComponent],
  providers:[CharacterdataService, SearchbarService]
})
export class AppModule {}
