import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MenuLateral } from '../interfaces/menu';
//interfaces/Contabilidad/menucontabilidad';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  public tituloS:string="";
  public menus: MenuLateral[] = [
    {"titulo": "Inicio", "Logo": "../../../assets/iconos/Logo-Contabilidad.png"},
    {"titulo": "Registro clientes", "Logo": "../../../assets/iconos/Logo-Contabilidad.png"},
    {"titulo": "Registro proveedores", "Logo": "../../../assets/iconos/Logo-Contabilidad.png"},
    {"titulo": "Factura de credito fiscal", "Logo": "../../../assets/iconos/Logo-Contabilidad.png", "funcion": this.abrirCreditoFiscal()},
    {"titulo": "Factura de consumidor final", "Logo": "../../../assets/iconos/Logo-Contabilidad.png", "funcion": this.abrirconsumidorFinal()}
  ];

  constructor(public service:DataService) { }

  ngOnInit() {
  }
  
  abrirCreditoFiscal(){}
  abrirconsumidorFinal(){}
}
