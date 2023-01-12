import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { CharacterdataService } from '../../services/characterdata.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  @Input() charactaName: object[];
  pagenumber: number = 1;;
  searchedName: [];

  constructor(
    public urlApi: CharacterdataService,
    public http: HttpClient
  ) {}

  ngOnInit() {

  }
  searchname(name, page){
    return this.http.get(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`).subscribe(
      (data)=>{
        this.searchedName = data['results'];
        console.log(this.searchedName)
      })
    }
  getNextResults(value) {
    this.searchname(value,this.pagenumber++)
   
  }
  getPreviousResults(value) {
    if (this.pagenumber > 1) {
      this.searchname(value,this.pagenumber++)
    
    }
  }
next(){
  this.pagenumber++
}

}
