import { Component, OnInit, VERSION } from '@angular/core';
import { CharacterdataService } from './services/characterdata.service';
import { Input } from '@angular/core';
import { Character } from './model/character';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  character!: Character;
  
  constructor(public api: CharacterdataService) {}
  ngOnInit() {
    this.api.getCharacterData().subscribe((data) => {
  
      this.character = {
        image: data['results'][0]['image'],
        name: data['results'][0]['name'],
        lk_location: data['results'][0]['location'].name,
        fs_episode: data['results'][0]['episode'][50],
      };
    });
  }
}
