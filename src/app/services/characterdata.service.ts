import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharacterdataService {
  urlApi = 'https://rickandmortyapi.com/api/character/?name=';

  constructor(public http: HttpClient) {}
  getCharacterData(name) {
    return this.http.get(`${this.urlApi}${name}`);
  }
}
