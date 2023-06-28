import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScienceSinglePage } from './science-single.page';

const routes: Routes = [
  {
    path: '',
    component: ScienceSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScienceSinglePageRoutingModule {}
