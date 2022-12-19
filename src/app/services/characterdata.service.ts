import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CharacterdataService {
  urlApi = 'https://rickandmortyapi.com/api/character';

  constructor(public http: HttpClient) {
  }
  getCharacterData() {
    return this.http.get(this.urlApi)
}
}