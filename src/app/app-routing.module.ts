import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    loadChildren: () => import('../app/pages/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('../app/pages/episodes/episodes.module').then(m => m.EpisodesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
