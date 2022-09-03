import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarconductorPage } from './consultarconductor.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarconductorPageRoutingModule {}
