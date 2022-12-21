import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchbarService } from '../../services/searchbar.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
searchbarForm:FormGroup
  constructor(private api:SearchbarService) { }

  ngOnInit() {
    this.api.initForm();
    this.api.filterdCharacterNames();
    this.searchbarForm = this.api.fb
  }

}