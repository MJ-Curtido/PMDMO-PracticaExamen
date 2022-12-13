import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  private flagParrafo1: Boolean;
  private flagParrafo2: Boolean;
  private flagMostrar: Boolean;

  @Input() modoProHijo!: Boolean;

  @Output() textoParrafo1 = new EventEmitter<String>();
  @Output() textoParrafo2 = new EventEmitter<String>();
  @Output() mostrar = new EventEmitter<Boolean>();

  constructor() {
    this.flagMostrar = true;
    this.flagParrafo1 = true;
    this.flagParrafo2 = true;
  }

  ngOnInit(): void {
  }

  cambiarParrafo1() {
    if (this.flagParrafo1) {
      this.textoParrafo1.emit('Hola buenas tardes');
    }
    else {
      this.textoParrafo1.emit('Parrafo 1');
    }
    this.flagParrafo1 = !this.flagParrafo1;
  }

  cambiarParrafo2() {
    if (this.flagParrafo2) {
      this.textoParrafo2.emit('Hola buenas tardes');
    }
    else {
      this.textoParrafo2.emit('Parrafo 1');
    }
    this.flagParrafo2 = !this.flagParrafo2;
  }

  mostrarOcultar() {
    this.flagMostrar = !this.flagMostrar;
    this.mostrar.emit(this.flagMostrar)
  }
}
