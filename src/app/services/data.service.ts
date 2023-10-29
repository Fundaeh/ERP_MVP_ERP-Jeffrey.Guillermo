import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //URL de la base
  _url = 'http://localhost:3000/pruebaUno';
  pdfName: string = '';

  //Variable que almacenara el valor a pasar
  nombreUsuario: string = 'Debe escribir un nombre a buscar';
  arregloFiltrado: Array<any> = [];
  desplegar:boolean = false;

  constructor( private http: HttpClient ) {
    console.log("Servicio Funcionando");
   }

   getDatos() {
    let heades = new HttpHeaders()
      .set('Type-content', 'aplication/json')

    return this.http.get(this._url, {headers: heades});
  }

  //Opcion un no definida
  buscarDatos(nombre: string) {
    const params = new HttpParams()
      .set('nombre', nombre);
  
    return this.http.get(`${this._url}?p=`, { params });
  }

  isOpen: boolean = false;
  isOpenMenuSuperior: boolean = false;
  optMenu: number = 0;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() changeNumber: EventEmitter<number> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }
  toggleMenuSuperior() {
    this.isOpenMenuSuperior = !this.isOpenMenuSuperior;
    this.change.emit(this.isOpenMenuSuperior);
  }
  closeMenus() {
    this.isOpenMenuSuperior = false;
    this.change.emit(this.isOpenMenuSuperior);
    this.isOpen = true;
    this.change.emit(this.isOpen);
  }

  /* Para cambiar el color del menu superior seleccinado */
  toggleMenuOption(opt: number) {
    this.optMenu = opt;
    this.changeNumber.emit(this.optMenu);
  }
  isMenuSelected(opt: number) {
    console.log('entré con: ' + opt);
    return (opt == this.optMenu);
  }
}
