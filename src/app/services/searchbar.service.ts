import { Injectable } from '@angular/core';
import { CharacterdataService } from './characterdata.service';

@Injectable()
export class SearchbarService {
  constructor(public characterData: CharacterdataService) {}

  getCharactersName( name: any[], allNames: any[]) {
    this.characterData.getCharacterData().subscribe((data) => {
      name = data['results'];
      name = allNames;
    });
  }

  formatFilteredNames( name: any, allNames: any[], value: string): void {
      name = allNames.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
  }
}
