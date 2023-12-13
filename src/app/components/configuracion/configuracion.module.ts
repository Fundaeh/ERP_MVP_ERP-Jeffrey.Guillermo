import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { RegistroContabilidadesComponent } from './registro-contabilidades/registro-contabilidades.component';
import { HistorialCambiosComponent } from './historial-cambios/historial-cambios.component';

@NgModule({
  declarations: [
    PerfilComponent,
    RegistroUsuariosComponent,
    RegistroContabilidadesComponent,
    HistorialCambiosComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule,
    MatTableModule,
    RouterModule
  ]
})
export class ConfiguracionModule { }
