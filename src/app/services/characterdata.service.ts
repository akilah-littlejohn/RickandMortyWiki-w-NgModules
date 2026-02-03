import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/character.model';

@Injectable({ providedIn: 'root' })
export class CharacterdataService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://rickandmortyapi.com/api/character';

  getCharacterData(name: string, page: number): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(
      `${this.apiUrl}?page=${page}&name=${name}`
    );
  }

  searchByName(name: string): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`${this.apiUrl}?name=${name}`);
  }
}
