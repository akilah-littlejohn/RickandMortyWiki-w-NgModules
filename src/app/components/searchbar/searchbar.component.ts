import { Component, OnInit } from '@angular/core';
import { CharacterSearchFilterPipe } from '../../character-search-filter.pipe';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(public  filterNames:CharacterSearchFilterPipe) { }

  ngOnInit() {
  }

}