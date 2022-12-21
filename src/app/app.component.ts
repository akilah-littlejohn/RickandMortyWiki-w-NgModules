import { Component, OnInit, VERSION } from '@angular/core';
import { CharacterdataService } from './services/characterdata.service';
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
      console.log(data);
    });
  }
}
