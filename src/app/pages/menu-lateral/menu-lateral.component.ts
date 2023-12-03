import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MenuLateral } from '../interfaces/menu';
import { MenuOpcionService } from 'src/app/services/menuOpcion/menu-opcion.service';
//interfaces/Contabilidad/menucontabilidad';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  public titulo:string = "";
  public tituloS:string="";
  public menus: Array<MenuLateral> = []

  constructor(public service:DataService,public opcionMenuService:MenuOpcionService) { }

  ngOnInit() {
    this.opcionMenuService.changeString.subscribe((opcion)=>{
      this.titulo = this.opcionMenuService.getDatos();
      this.menus = this.menu(this.opcionMenuService.getDatos());
    });

  }

  menu(valor:string){
    let menu : object = {
      "configuracion": [
        {titulo: "titulo", logo: "../assets/iconos/IconoConfiguración-Gris.png"},
        {titulo: "Generales", logo: "../assets/iconos/IconoConfiguración-Gris.png", ruta: ""},
        {titulo: "Contable", logo: "../assets/iconos/IconoConfiguración-Gris.png", ruta: ""},
        {titulo: "Cambio de contraseña", logo: "../assets/iconos/IconoConfiguración-Gris.png", ruta: ""},
        {titulo: "Historial de cambios", logo: "../assets/iconos/IconoConfiguración-Gris.png", ruta: ""}
      ],
      "contabilidad":[
        {titulo: "titulo", logo: "../../../assets/iconos/Logo-Contabilidad.png"},
        {titulo: "Inicio", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},
        {titulo: "Registro clientes", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},
        {titulo: "Registro proveedores", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},
        {titulo: "Factura de credito fiscal", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: "/contabilidad/documentodte/creditofiscal"},
        {titulo: "Factura de consumidor final", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: "/contabilidad/documentodte/consumidorfinal"}
      ],
      "finanzas":[
        {titulo: "titulo", logo: "../../../assets/iconos/Logo-Contabilidad.png"},
        {titulo: "Inicio", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""}
      ],
      "rrhh":[

      ]
    }
  return menu[valor as keyof typeof menu] ;

  }

}
