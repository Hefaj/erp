import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { ProductSectionFilter1Component } from 'src/app/pages/product/sections/filters/product-section-filter-1/product-section-filter-1.component';
import { ProductSectionFilter2Component } from 'src/app/pages/product/sections/filters/product-section-filter-2/product-section-filter-2.component';
import { ProductSectionFilter3Component } from 'src/app/pages/product/sections/filters/product-section-filter-3/product-section-filter-3.component';
import GroupRadioItem from '../../molecules/group-radio/models/GroupRadioItem';
import { SidebarRadioComponent } from '../../molecules/sidebar-radio/sidebar-radio.component';
import SidebarData from '../../organisms/sidebar/models/SidebarData';
import { OrganismModule } from '../../organisms/organism.module';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [CommonModule, OrganismModule],
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  public data$: Observable<SidebarData> = of({
    items: [
      {
        sidebarComponent: SidebarRadioComponent,
        sidebarComponentData: {
          sidebarHeader: {},
          groupRadioData: {
              items: [
                {
                  id: 1,
                  label: 'A'
                } as GroupRadioItem,
                {
                  id: 2,
                  label: 'B'
                } as GroupRadioItem,
                {
                  id: 3,
                  label: 'C',
                  checked: true,
                } as GroupRadioItem,
                {
                  id: 4,
                  label: 'D',
                  disabled: true,
                } as GroupRadioItem,
                {
                  id: 5,
                  label: 'E'
                } as GroupRadioItem
              ]
            }
        },
        overlayComponent: ProductSectionFilter1Component
      },
      {
        sidebarComponent: SidebarRadioComponent,
        sidebarComponentData: {
          sidebarHeader: {},
          groupRadioData: {
              items: [
                {
                  id: 1,
                  label: 'A'
                } as GroupRadioItem,
                {
                  id: 2,
                  label: 'B'
                } as GroupRadioItem,
              ]
            }
        },
        overlayComponent: ProductSectionFilter2Component
      },

      {
        sidebarComponent: SidebarRadioComponent,
        sidebarComponentData: {
          sidebarHeader: {},
          groupRadioData: {
              items: [
                {
                  id: 1,
                  label: 'A'
                } as GroupRadioItem,
              ]
            }
        },
        overlayComponent: ProductSectionFilter3Component
      },
    ]
  });
}
