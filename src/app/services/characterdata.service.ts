import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CharacterdataService {
  urlApi = 'https://rickandmortyapi.com/api/character?page=';

  constructor(public http: HttpClient) {
  }
  getCharacterData(index) {
    return this.http.get(`${this.urlApi}${index}`)
}
}