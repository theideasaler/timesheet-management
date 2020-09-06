import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertypipe'
})
export class PropertypipePipe implements PipeTransform {

  transform(object: object, property: string): unknown {
    return object[property];
  }

}
