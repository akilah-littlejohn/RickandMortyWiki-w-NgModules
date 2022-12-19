import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class CharacterdataService {
  urlApi = 'https://rickandmortyapi.com/api/character';

  constructor(public http: HttpClient) {
  }
  getCharacterData() {
    return this.http.get(this.urlApi)
}
}