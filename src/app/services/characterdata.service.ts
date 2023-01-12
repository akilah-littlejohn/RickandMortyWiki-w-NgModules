import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharacterdataService {
  urlApi = "https://rickandmortyapi.com/api/character/?page=&"
  

  constructor(public http: HttpClient) {}
  getCharacterData(name, number) {
    return this.http.get(`https://rickandmortyapi.com/api/character/?page=${number}&name=${name}`);   
  }
searchname(name){
  return this.http.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
}

}
