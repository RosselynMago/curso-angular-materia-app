import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environments';
import { EpisodeList } from 'src/app/interfaces/episodes.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  constructor (private http: HttpClient){}
  getEpisodes(): Observable<EpisodeList>{
    return this.http.get<EpisodeList>(env.api_url+'episode');
  }
}

