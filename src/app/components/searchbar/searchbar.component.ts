import { Component, OnInit } from '@angular/core';
import { CharacterSearchFilterPipe } from '../../character-search-filter.pipe';
import { SearchbarService } from '../../services/searchbar.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
charactaName:any[];
allcharacterNamesany:any[];
  constructor(public filterNames:CharacterSearchFilterPipe, public searchbarService:SearchbarService) { }

  ngOnInit() {
    this.searchbarService.getCharactersName(this.charactaName, this.allcharacterNamesany);
  }

}