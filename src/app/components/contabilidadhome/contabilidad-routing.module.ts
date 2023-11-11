import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContabilidadinicioComponent } from './contabilidadinicio/contabilidadinicio.component';
import { ConsumidorfinalComponent } from './documentodte/consumidorfinal/consumidorfinal.component';
import { CreditofiscalComponent } from './documentodte/creditofiscal/creditofiscal.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';

const routes: Routes = [
  {path: 'contabilidadinicio', component:ContabilidadinicioComponent},
  {path: 'documentodte/consumidorfinal', component:ConsumidorfinalComponent},
  {path: 'documentodte/creditofiscal', component:CreditofiscalComponent},
  {path: 'ingresoconsumidorfinal', component:ContabilidadComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContabilidadRoutingModule { }
