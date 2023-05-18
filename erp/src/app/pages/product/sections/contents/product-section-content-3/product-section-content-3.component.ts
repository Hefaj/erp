import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import DesktopData from 'src/app/core/templates/desktop/models/DesktopData';
import IScenario from 'src/app/core/templates/desktop/models/IScenario';
import { ProductSectionAction2Component } from '../../actions/product-section-action-2/product-section-action-2.component';
import { ProductSectionFilter2Component } from '../../filters/product-section-filter-2/product-section-filter-2.component';
import { ProductSectionContent2Component } from '../product-section-content-2/product-section-content-2.component';

@Component({
  selector: 'app-product-section-content-3',
  templateUrl: './product-section-content-3.component.html',
  styleUrls: ['./product-section-content-3.component.scss']
})
export class ProductSectionContent3Component {

  public s1: IScenario = {
    content: ProductSectionContent2Component,
    filter: ProductSectionFilter2Component,
    action: ProductSectionAction2Component
  };

  public s2: IScenario = {
    content: ProductSectionContent2Component,
    filter: ProductSectionFilter2Component,
    action: ProductSectionAction2Component
  };

  public pageData$: Observable<DesktopData> = of({
    items: [
      {
        tabLabel: 'TAB_1',
        grid: [
          [this.s1]
        ]
      },
      {
        tabLabel: 'TAB_2',
        grid: [
          [this.s1, this.s2],
          [this.s1, this.s2]
        ]

      },
      {
        tabLabel: 'TAB_3',
        grid: [
          [this.s1, this.s2],
          [this.s1, this.s2]
        ]
      }
    ]
  });
}
