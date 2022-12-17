import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharCardComponent } from './char-card/char-card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CharCardComponent,
    SearchbarComponent,
    HomecomponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
