import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters-list/characters.component';
import { CharactersResolver } from './resolvers/characters.resolver'
const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    resolve: {
      data: CharactersResolver,
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
