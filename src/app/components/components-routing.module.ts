import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ResultadosComponent } from './resultados/resultados.component';
import { HomeComponent } from '../pages/home/home.component';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { FinanzasComponent } from './finanzas/finanzas.component';
import { ContabilidadComponent } from './contabilidadhome/contabilidad/contabilidad.component';
import { RrhhComponent } from './rrhh/rrhh.component';
import { CatalogUserComponent } from './catalog-user/catalog-user.component';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { CreditofiscalComponent } from './contabilidadhome/documentodte/creditofiscal/creditofiscal.component';
import { ConsumidorfinalComponent } from './contabilidadhome/documentodte/consumidorfinal/consumidorfinal.component';
import { RegistroproveedoresComponent } from './registros/registroproveedores/registroproveedores.component';
import { ContabilidadregistroclientesComponent } from './registros/registroclientes/contabilidadregistroclientes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'resultados', component: ResultadosComponent},
      {path: 'pdfView', component: PdfViewComponent},
      {path: 'finanzas', component: FinanzasComponent},
      {path: 'contabilidadhome/contabilidad', component: ContabilidadComponent},
      {path: 'rrhh', component: RrhhComponent},
      {path: 'usercatalog', component: CatalogUserComponent},
      {path: 'ejemplo', component: EjemploComponent},
     // {path: 'contabilidadhome/registroclientes', component: RegistroClientesComponent},
      {path: 'registro/registroclientes', component: ContabilidadregistroclientesComponent},
      {path: 'registro/registroproveedores', component: RegistroproveedoresComponent},
      {path: 'contabilidadhome/documentodte/creditofiscal', component: CreditofiscalComponent},
      {path: 'contabilidadhome/documentodte/consumidorfinal', component: ConsumidorfinalComponent},

      {path: '**', redirectTo: 'resultados' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ]
})
export class ComponentsRoutingModule { }
