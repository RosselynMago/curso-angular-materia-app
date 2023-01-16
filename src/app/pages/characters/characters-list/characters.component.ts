import { CharactersService } from './../../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersList } from 'src/app/interfaces/characters.interface';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  result!: CharactersList;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data})  => {
      this.result = data;
    })
  }

  searchToFind(value : string){
   this.charactersService.getCharactersByName(value)
    .subscribe(data => {
      this.result = data;
    })
  }
}
