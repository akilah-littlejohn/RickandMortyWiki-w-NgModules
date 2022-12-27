import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterSearchFilter'
})
export class CharacterSearchFilterPipe implements PipeTransform {

  transform(characterListNames: any[], filterTextInput?: string): any {
    return characterListNames ? characterListNames.filter(item => item.name.search(new RegExp(filterTextInput, 'i')) > -1) : [];
  }

}