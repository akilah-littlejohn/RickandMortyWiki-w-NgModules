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
  @Input() charactaName: any[];
  @Input() pagenumber:number = 1;
  allcharacterNames: any[];
  _searchCharacterName:string = ''
  


  constructor(
    public filterNames: CharacterSearchFilterPipe,
    public urlApi: CharacterdataService,
    public searchFilteredNames: SearchbarService
  ) {}

  ngOnInit() {
    this.urlApi.getCharacterData(this._searchCharacterName).subscribe((data) => {
      this.charactaName = data['results'];
      this.allcharacterNames = this.charactaName;
      console.log (this.charactaName);
    });
  }


}
