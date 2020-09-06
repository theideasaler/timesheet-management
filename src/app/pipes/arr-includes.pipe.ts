import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrIncludes',
})
export class ArrIncludesPipe implements PipeTransform {
  transform(arr: any[], ele: any): boolean {
    if (!arr) {
      return false;
    }
    return arr.includes(ele);
  }
}
