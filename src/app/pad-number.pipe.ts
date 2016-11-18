import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padNumber'
})
export class PadNumberPipe implements PipeTransform {

  transform(value: number, padString: string): string {
    let valueString: string = '' + value;
    let outString: string;
    if ( padString.length > valueString.length ) {
      outString = 
        padString.substring(0, padString.length - valueString.length) + valueString;
    } else {
      outString = valueString;
    }

    return outString;
  }

}