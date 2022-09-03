import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarmultaPageRoutingModule } from './consultarmulta-routing.module';

import { ConsultarmultaPage } from './consultarmulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarmultaPageRoutingModule
  ],
  declarations: [ConsultarmultaPage]
})
export class ConsultarmultaPageModule {}
