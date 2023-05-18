import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridTemplateAreas',
  standalone: true
})
export class GridTemplateAreasPipe implements PipeTransform {

  transform(grid: any[][]): string {
    const items: Map<any, string> = new Map();
    const areas: string[] = [];
    for (let columns of grid) {

      let row: string[] = [];

      for (let item of columns) {
        if (!items.has(item)) {
          items.set(item, item.name);
        }
        row.push(items.get(item)!);
      }
      areas.push(`"${row.join(' ')}"`);
    }
    console.log(areas.join(' '));
    return areas.join(' ');
  }

}
