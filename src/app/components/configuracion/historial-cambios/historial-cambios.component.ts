import { Component, OnInit } from '@angular/core';
import { Historial, HistorialData } from 'src/app/pages/interfaces/historial';

@Component({
  selector: 'app-historial-cambios',
  templateUrl: './historial-cambios.component.html',
  styleUrls: ['./historial-cambios.component.css']
})
export class HistorialCambiosComponent implements OnInit {

  historialLista = ['ejemplo1', 'ejemplo2'];

  historialSeleccionado: HistorialData | undefined;

  ejemploHistorial1: HistorialData = {
    columnas: ['columna1', 'columna2'],
    historial: [
      {'columna1': 'valor_c1_r1', 'columna2': 'valor_c2_r1'},
      {'columna1': 'valor_c1_r2', 'columna2': 'valor_c2_r2'},
    ]
  }
  ejemploHistorial2: HistorialData = {
    columnas: ['col uno', 'col dos', 'col tres'],
    historial: [
      {'col1': 1, 'columna2': '2', 'col3': 3},
      {'col1': 2, 'col2': 4, 'col tres': 7},
      {'col1': 3, 'col2': 7, 'col tres': 14},
    ]
  }

  constructor() { }

  ngOnInit() {
    this.historialSeleccionado = this.ejemploHistorial1;
    console.log(JSON.stringify(this.historialSeleccionado))
  }

  buscarHistorial(tabla:string) {
    // Lógica para buscar el historial solicitado
  }

}
