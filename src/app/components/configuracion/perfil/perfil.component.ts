import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  opcion = 0;
  opciones = ["Editar","Guardar"];

  constructor() { }

  ngOnInit() {
  }

  operacion() {
    if (this.opcion == 1) {
      // Toda la lógica de guardado

      this.opcion = 0;
    } else {
      // Toda la lógica para entrar en modo edición

      this.opcion = 1;
    }
  }

  cambioContra() {
    // Lógica para cambio de contraseña
  }
}
