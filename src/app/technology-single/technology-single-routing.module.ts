import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologySinglePage } from './technology-single.page';

const routes: Routes = [
  {
    path: '',
    component: TechnologySinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologySinglePageRoutingModule {}
