import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

  opcion = 0;

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
}
