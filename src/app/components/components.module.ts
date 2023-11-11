import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ComponentsRoutingModule } from './components-routing.module';

import { ResultadosComponent } from './resultados/resultados.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { FinanzasComponent } from './finanzashome/finanzas/finanzas.component';
import { ContabilidadComponent } from './contabilidadhome/contabilidad/contabilidad.component';
import { RrhhComponent } from './rrhh/rrhh.component';
import { CatalogUserComponent } from './catalog-user/catalog-user.component';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { ConsumidorfinalComponent } from './contabilidadhome/documentodte/consumidorfinal/consumidorfinal.component';
import { RegistroproveedoresComponent } from './registros/registroproveedores/registroproveedores.component';
import { LoginComponent } from './login/login.component';
import { DistribucioncompletaComponent } from './distribucioncompleta/distribucioncompleta.component';

@NgModule({
  declarations: [
    ResultadosComponent,
    FilterPipe,
    PdfViewComponent,
    RrhhComponent,
    CatalogUserComponent,
    RegistroClientesComponent,
    EjemploComponent,
    RegistroproveedoresComponent,
    RegistroproveedoresComponent
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
