import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CharacterdataService } from './characterdata.service';

@Injectable()
export class SearchbarService {


  constructor(public characterData: CharacterdataService) {}
filtereD_character(searchbarControl:FormControl, characterNameData:Observable<string[]>, val){
  characterNameData = searchbarControl.valueChanges.pipe(
    startWith(''),
    map(data =>this.filter_characterName(data || '', val))
  )
}

filter_characterName(val, name:string[]){
  const filterValue = this.normalize_characterName(val);
  return name.filter(data => this.normalize_characterName(data).includes(filterValue))
}

normalize_characterName(userInputValue:string): string{
  return userInputValue.toLowerCase().replace(/\s/g, '')

}

}
