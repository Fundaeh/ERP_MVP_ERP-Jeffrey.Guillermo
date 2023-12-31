import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MenuOpcionService } from 'src/app/services/menuOpcion/menu-opcion.service';
import { Archivo } from '../interfaces/archivo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  valorBusqueda: string = '';
  encontrados: Archivo[] = [];

  abrirHam = false;
  cerrar = true;
  menu = false;

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  menuInicioShow: boolean = false;

  constructor(private router: Router, public dataService:DataService, public opcionMenuService:MenuOpcionService) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    // Inicializar Modo de Color de sitio
    this.dataService.cambiarTema(this.dataService.getPreferredTheme());
    this.dataService.cambiarEscalaGrises(true);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  async buscar() {
    // Seteamos bandera de búsqueda para cambios visuales
    this.dataService.buscando = this.valorBusqueda != "";
    
    // Llamamos al método que busca al servidor
    if (this.dataService.buscando) {
      await this.dataService.buscarDatos(this.valorBusqueda);
      this.encontrados = this.dataService.arregloFiltrado;
    }
  }
  seleccionarBusqueda(seleccionado: string) {
    this.dataService.busquedaSeleccionado = seleccionado;
    this.router.navigate(["/resultados"]);
  }

  resetBusqueda() {
    this.valorBusqueda = "";
    this.dataService.buscando = false;
  }

  desplegarMenuHam() {
    this.dataService.toggle();
  }
  desplegarMenuSuperior() {
    this.dataService.toggleMenuSuperior();
  }  
  opcionMenu(opcion:string) {
    this.opcionMenuService.setDatos(opcion);
  }
}
