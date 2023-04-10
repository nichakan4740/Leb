import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'choose'
})
export class ChoosePipe implements PipeTransform {

  transform(value: any, args?: any[]): any[] {
    return Object.keys(value);
  }

}
