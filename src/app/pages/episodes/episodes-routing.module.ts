import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes-list/episodes.component';
import { EpisodesResolver } from './resolvers/episodes.resolver';
const routes: Routes = [
  {
    path: '',
    component: EpisodesComponent,
    resolve: {
      data: EpisodesResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
