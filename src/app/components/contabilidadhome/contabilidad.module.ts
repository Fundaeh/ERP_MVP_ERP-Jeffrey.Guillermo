import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContabilidadRoutingModule } from './contabilidad-routing.module';
import { ContabilidadinicioComponent } from './contabilidadinicio/contabilidadinicio.component';
import { CreditofiscalComponent } from './documentodte/creditofiscal/creditofiscal.component';
import { ConsumidorfinalComponent } from './documentodte/consumidorfinal/consumidorfinal.component';
import { MatTableModule } from '@angular/material/table';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';

@NgModule({
  declarations: [
    ContabilidadinicioComponent,
    CreditofiscalComponent,
    ConsumidorfinalComponent,
    ContabilidadComponent
  ],
  imports: [
    CommonModule,
    ContabilidadRoutingModule,
    MatTableModule
  ]
})
export class ContabilidadModule { }
