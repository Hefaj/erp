import { Pipe, PipeTransform } from '@angular/core';
import { SidebarPillComponent } from 'src/app/core/molecules/sidebar-pill/sidebar-pill.component';
import { Observable, of } from 'rxjs';
import FilterSidebar from '../models/FilterSidebar';
import SidebarData from '../../sidebar/models/SidebarData';
import { SidebarContentItem } from '../../sidebar/models/SidebarContentItem';

@Pipe({
  name: 'sidebarFilterItem',
  standalone: true
})
export class SidebarFilterItemPipe implements PipeTransform {

  transform(data: FilterSidebar | undefined): Observable<SidebarData> {

    const base: SidebarData = {
      items: data?.items.map(x => {
        return {
            sidebarComponent: SidebarPillComponent,
            overlayComponent: x.overlayComponent,
            sidebarComponentData: x.sidebarPillData
        } as SidebarContentItem;
      }) ?? []
    };

    return of(base);
  }
}
