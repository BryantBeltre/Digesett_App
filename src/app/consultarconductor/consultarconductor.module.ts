import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarconductorPageRoutingModule } from './consultarconductor-routing.module';

import { ConsultarconductorPage } from './consultarconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarconductorPageRoutingModule
  ],
  declarations: [ConsultarconductorPage]
})
export class ConsultarconductorPageModule {}
