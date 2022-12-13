import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDirectivaRara]'
})
export class DirectivaRaraDirective {
  @Input('appDirectivaRara') config = {
    color: 'color1'
  }
  private txt: String;

  constructor(private element: ElementRef) {
    this.txt = ""
  }

  @HostListener('click') onClick() {
    if (this.txt == "") {
      this.txt = this.element.nativeElement.innerHTML;
      this.element.nativeElement.innerHTML = this.element.nativeElement.innerHTML.toUpperCase();
      this.element.nativeElement.className = this.config.color;
      this.pertenece = true;
    } else {
      this.element.nativeElement.innerHTML = this.txt;
      this.element.nativeElement.className = "";
      this.txt = "";
      this.pertenece = false;
    }
  }

  @HostBinding('class.bordes') private pertenece: Boolean = false;
}
