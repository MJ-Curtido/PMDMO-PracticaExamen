import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeInsulto'
})
export class PipeInsultoPipe implements PipeTransform {

  transform(value: String, anyadidos: String[]): unknown {
    value = value.toUpperCase();

    anyadidos.forEach(element => {
      value += " " + element;
    });

    return value;
  }

}
