import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { RandmsvgComponent } from './home-svgtemplate/randmsvg/randmsvg.component';
import { CharCardComponent } from './components/char-card/char-card.component';
import { HomeComponent } from './components/home/home.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CharacterdataService } from './services/characterdata.service';
import { SearchResultsComponent } from './components/searchbar/search-results/search-results.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
  ],
  declarations: [
    AppComponent,
    RandmsvgComponent,
    CharCardComponent,
    HomeComponent,
    SearchbarComponent,
    SearchResultsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [CharacterdataService],
})
export class AppModule {}
