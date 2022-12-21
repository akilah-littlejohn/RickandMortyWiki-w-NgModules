import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CharacterdataService } from './characterdata.service';

@Injectable()
export class SearchbarService {

filterdCharacterNames;
formGroup:FormGroup
options

  constructor(private api:CharacterdataService, public fb :FormBuilder) { }

  initForm(){
    this.formGroup = this.fb.group({
      'characterName' : ['']
    })
    this.formGroup.get('characterName').valueChanges.subscribe(response => {
      console.log('data is ', response);
      this.filterData(response);
    })
  }

  
  filterData(enteredData){
    this.filterdCharacterNames = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames(){
    this.api.getCharacterData().subscribe(response => {
      this.options = response;
      this.filterdCharacterNames = response;
    })
  }

}