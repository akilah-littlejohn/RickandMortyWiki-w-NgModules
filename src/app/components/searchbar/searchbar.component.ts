import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CharacterdataService } from '../../services/characterdata.service';
import { SearchbarService } from '../../services/searchbar.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {

  searchbar_input = new FormControl('');
  all_character_names:string[];
  character_names_filtered: Observable<string[]>;


  constructor(

    public urlApi: CharacterdataService,
    public filteredNames: SearchbarService
  ) {}

  ngOnInit() {
    this.urlApi.getCharacterData().subscribe(
      results => this.all_character_names = results['results']['name']

    )


  }
}
