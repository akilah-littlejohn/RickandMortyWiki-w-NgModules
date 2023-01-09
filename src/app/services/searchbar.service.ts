import { Injectable } from '@angular/core';
import { CharacterdataService } from './characterdata.service';

@Injectable()
export class SearchbarService {
  constructor(public characterData: CharacterdataService) {}

  formatFilteredNames(name: any, allNames: any[], value: string): void {
    name = allNames.filter((val) => val.name.includes(value));
    console.log(name);
  }

  getNextResults(){}
  getPreviousResults(){}
}
