import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'existInArr',
})
export class ExistInArrPipe implements PipeTransform {
  transform(field: any, arr: any[]): any {
    if (!arr) {
      arr = [];
    }
    return arr.includes(field);
  }
}
