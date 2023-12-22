import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ComponentsRoutingModule } from './components-routing.module';

import { ResultadosComponent } from './resultados/resultados.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { CatalogUserComponent } from './catalog-user/catalog-user.component';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { RegistroproveedoresComponent } from './registros/registroproveedores/registroproveedores.component';
import { CustomDatepickerComponent } from './_base-components/input-datepicker/custom-datepicker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ResultadosComponent,
    FilterPipe,
    PdfViewComponent,
    CatalogUserComponent,
    RegistroClientesComponent,
    EjemploComponent,
    RegistroproveedoresComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    NgxExtendedPdfViewerModule,
    CustomDatepickerComponent,
    NgbModule
  ],
  exports: [
  ],
})
export class ComponentsModule { } 
