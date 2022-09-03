import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsutarvehiculoPage } from './consutarvehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: ConsutarvehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsutarvehiculoPageRoutingModule {}
