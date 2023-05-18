import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import GridData from 'src/app/core/organisms/grid/models/SidebarData';
import IScenario from '../models/IScenario';

@Pipe({
  name: 'desktopGrid',
  standalone: true
})
export class DesktopGridPipe implements PipeTransform {

  transform(items: IScenario[][]): Observable<GridData> {

    return of({
      grid: items.map(x => x.map(y => y.content))
    });
  }

}
