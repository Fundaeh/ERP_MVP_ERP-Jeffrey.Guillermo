import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'MVP-v3';
  mostrarContenido: boolean =false;
  mostrarContenidoFinanzas: boolean =false;
  mostrarContenidoContabilidad: boolean =false;
  estaActivo: boolean=false;
  estaActivoC: boolean=false;
  estaActivoF: boolean=false;

  btnActivo(){
    if(!this.mostrarContenido){
      this.mostrarContenidoContabilidad = false;
      this.mostrarContenidoFinanzas = false;
    }
  }  

  btnActivoC(){
    if(!this.mostrarContenidoContabilidad) {
      this.mostrarContenidoFinanzas = false;
      this.mostrarContenido = false;
    }
  }
  btnActivoF(){
    if(!this.mostrarContenidoFinanzas) {
      this.mostrarContenido = false;
      this.mostrarContenidoContabilidad = false;
    }
  }
}
