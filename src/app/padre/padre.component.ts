import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  protected textoP1: String;
  protected mostrarParrafos: Boolean;
  protected modoProPadre: Boolean;
  @ViewChild('parrafo2') parrafo2!: ElementRef;

  constructor() {
    this.textoP1 = "Parrafo 1";
    this.mostrarParrafos = true;
    this.modoProPadre = false;
  }

  ngOnInit(): void {
  }

  cambiarTextoParrafo1(cadena: String) {
    this.textoP1 = cadena;
  }

  cambiarTextoParrafo2(cadena: String) {
    this.parrafo2.nativeElement.textContent = cadena;
  }

  cambiarMostrarParrafos(estado: Boolean) {
    this.mostrarParrafos = estado;
  }

  cambiarModoPro() {
    this.modoProPadre = !this.modoProPadre;
  }
}
