import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CharactersList } from 'src/app/interfaces/characters.interface';
import { CharactersService } from '../../../shared/services/characters.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersResolver implements Resolve<CharactersList> {

  constructor(private charactersService: CharactersService){}

  resolve(): Observable<CharactersList> {
    return this.charactersService.getCharacters();
  }
}
