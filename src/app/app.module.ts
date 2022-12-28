import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatAutocompleteModule } from '@angular/material/autocomplete';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RandmsvgComponent } from './home-svgtemplate/randmsvg/randmsvg.component';
import { CharCardComponent } from './components/char-card/char-card.component';
import { HomeComponent } from './components/home/home.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CharacterdataService } from './services/characterdata.service';
import { SearchbarService } from './services/searchbar.service';

@NgModule({
  imports: [BrowserModule, FormsModule, MatIconModule,MatAutocompleteModule, HttpClientModule ],
  declarations: [
    AppComponent,
    RandmsvgComponent,
    CharCardComponent,
    HomeComponent,
    SearchbarComponent,
  ],
  bootstrap: [AppComponent],
  providers:[CharacterdataService, SearchbarService]
})
export class AppModule {}
