import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RandmsvgComponent } from './home-svgtemplate/randmsvg/randmsvg.component';
import { CharCardComponent } from './components/char-card/char-card.component';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CharacterdataService } from './sevices/characterdata.service';
import { SearchbarService } from './sevices/searchbar.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
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
