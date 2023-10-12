import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ComponentsRoutingModule } from './components-routing.module';

import { ResultadosComponent } from './resultados/resultados.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { FinanzasComponent } from './finanzas/finanzas.component';
import { ContabilidadComponent } from './contabilidadhome/contabilidad/contabilidad.component';
import { RrhhComponent } from './rrhh/rrhh.component';
import { CatalogUserComponent } from './catalog-user/catalog-user.component';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { ContabilidadinicioComponent } from './contabilidadhome/contabilidadinicio/contabilidadinicio.component';
import { ContabilidadregistroclientesComponent } from './registros/registroclientes/contabilidadregistroclientes.component';
import { CreditofiscalComponent } from './contabilidadhome/documentodte/creditofiscal/creditofiscal.component';
import { ConsumidorfinalComponent } from './contabilidadhome/documentodte/consumidorfinal/consumidorfinal.component';
import { RegistroproveedoresComponent } from './registros/registroproveedores/registroproveedores.component';

@NgModule({
  declarations: [
    ResultadosComponent,
    FilterPipe,
    PdfViewComponent,
    FinanzasComponent,
    ContabilidadComponent,
    RrhhComponent,
    CatalogUserComponent,
    RegistroClientesComponent,
    EjemploComponent,
    ContabilidadinicioComponent,
    ContabilidadregistroclientesComponent,
    RegistroproveedoresComponent,
    CreditofiscalComponent,
    ConsumidorfinalComponent,
    RegistroproveedoresComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    NgxExtendedPdfViewerModule
  ],
  exports: [
  ],
})
export class ComponentsModule { }
