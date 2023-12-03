import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MenuOpcionService } from 'src/app/services/menuOpcion/menu-opcion.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  valor:any = '';

  abrirHam = false;
  cerrar = true;
  menu = false;

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  menuInicioShow: boolean = false;

  constructor(public dataService:DataService, public opcionMenuService:MenuOpcionService) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  mandarDato() {
    this.dataService.nombreUsuario = this.valor;
    console.log(this.valor);
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
