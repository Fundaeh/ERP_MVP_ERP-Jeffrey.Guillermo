import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent {

  listPDFs = [
    {nombre: "Bootstrap-vs-Material-Design-vs-Prime-vs-Tailwind.pdf"},
    {nombre: "sample.pdf"},
    {nombre: "hello world.pdf"},
    {nombre: "Joel Soto.pdf"},
    {nombre: "Adrián Martínez.pdf"},
    {nombre: "Carlos Herrera.pdf"},
    {nombre: "Claudia Paredes.pdf"},
    {nombre: "Emilio Soto.pdf"},
    {nombre: "Fernando Castro.pdf"},
    {nombre: "Guadalupe Morales.pdf"},
    {nombre: "Isabel Rivas.pdf"},
    {nombre: "Karen Mendez.pdf"},
    {nombre: "Laura Flores.pdf"},
    {nombre: "Lorena Jiménez.pdf"},
    {nombre: "Leonardo Morales.pdf"},
    {nombre: "Marcela Silva.pdf"},
  ]

  constructor(public conectarServicio:DataService) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
    // this.makePDF();
    console.log(this.conectarServicio.pdfName);
  }

  src1: string = this.conectarServicio.pdfName;
  // pdfs = [
  //   {nombre: "Bootstrap-vs-Material-Design-vs-Prime-vs-Tailwind.pdf"},
  //   {nombre: "sample.pdf"},
  //   {nombre: "hello world.pdf"}
  // ]

  public page = 2;
  public pageLabel!: string;

  selectPDF(name: string) {
    this.src1 = name;
  }
}

export let pdfDefaultOptions = {
  externalLinkTarget: 0,
  renderer: 'canvas',
  assetsFolder: 'assets',
};
