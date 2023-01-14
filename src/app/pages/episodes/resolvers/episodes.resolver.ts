import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { EpisodesService } from '../../../shared/services/episodes.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodesResolver implements Resolve<any> {

  constructor(private episodesService: EpisodesService){}

  resolve(): Observable<any> {
    return this.episodesService.getEpisodes();
  }
}
