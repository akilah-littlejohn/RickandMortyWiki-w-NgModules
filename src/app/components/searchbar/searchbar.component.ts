import { Component, OnInit, Input } from '@angular/core';
import { CharacterSearchFilterPipe } from '../../character-search-filter.pipe';
import { CharacterdataService } from '../../services/characterdata.service';
import { SearchbarService } from '../../services/searchbar.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  @Input() charactaName: object[];
  pagenumber: number = 1;
  allcharacterNames:unknown[];
  _searchCharacterName: string = '';

  constructor(
    public filterNames: CharacterSearchFilterPipe,
    public urlApi: CharacterdataService,
    public searchFilteredNames: SearchbarService
  ) {}

  ngOnInit() {
    this.getCharacterdata();

  }
  getNextResults(){
    this.pagenumber++
    this.getCharacterdata();
    
  }
    getPreviousResults(){
      while(this.pagenumber > 1){
        this.pagenumber--
        this.getCharacterdata();
      }

    }

    getCharacterdata(){
      this.urlApi
      .getCharacterData(this._searchCharacterName, this.pagenumber)
      .subscribe((data) => {
        this.charactaName = data['results'];
        this.allcharacterNames = this.charactaName;
        console.log(this.charactaName);
      });
 

    }
}
