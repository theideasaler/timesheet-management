import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalcase',
})
export class CapitalcasePipe implements PipeTransform {
  transform(value: string): unknown {
    if (value) {
      value = value
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());
    }
    return value;
  }
}
