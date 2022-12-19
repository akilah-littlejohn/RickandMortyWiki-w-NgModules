import { Component, OnInit, VERSION } from '@angular/core';
import { CharacterdataService } from './services/characterdata.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  constructor(public api:CharacterdataService){
  }
  ngOnInit(){

  }
}
