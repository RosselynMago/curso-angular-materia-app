import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environments';
import { CharactersList } from 'src/app/interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  constructor (private http: HttpClient){}

  getCharacters(): Observable<CharactersList>{
    return this.http.get<CharactersList>(env.api_url+'character');
  }

  getCharactersByName(value: string): Observable<CharactersList>{
    return this.http.get<CharactersList>(env.api_url+'character/?name='+value);
  }

}
