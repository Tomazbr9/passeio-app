import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GaleriaRoutingModule } from './galeria-routing-module';
import { Galeria } from './galeria/galeria';


@NgModule({
  declarations: [
    Galeria
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    FormsModule
  ]
})
export class GaleriaModule { }
