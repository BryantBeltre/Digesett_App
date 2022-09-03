import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarmultaPage } from './consultarmulta.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarmultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarmultaPageRoutingModule {}
