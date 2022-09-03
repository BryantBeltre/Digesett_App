import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AplicarrutaPage } from './aplicarruta.page';

const routes: Routes = [
  {
    path: '',
    component: AplicarrutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AplicarrutaPageRoutingModule {}
