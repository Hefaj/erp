import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridArea',
  standalone: true
})
export class GridAreaPipe implements PipeTransform {

  transform(items: any[][]): any[] {
    return Array.from(new Set(items.flat()));
  }

}
