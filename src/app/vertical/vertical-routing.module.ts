import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerticalPage } from './vertical.page';

const routes: Routes = [
  {
    path: '',
    component: VerticalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerticalPageRoutingModule {}
