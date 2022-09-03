import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarifarioPage } from './tarifario.page';

const routes: Routes = [
  {
    path: '',
    component: TarifarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarifarioPageRoutingModule {}
