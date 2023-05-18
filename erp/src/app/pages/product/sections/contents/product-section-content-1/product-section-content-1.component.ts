import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import DesktopData from 'src/app/core/templates/desktop/models/DesktopData';
import IScenario from 'src/app/core/templates/desktop/models/IScenario';
import { ProductSectionAction2Component } from '../../actions/product-section-action-2/product-section-action-2.component';
import { ProductSectionAction3Component } from '../../actions/product-section-action-3/product-section-action-3.component';
import { ProductSectionFilter2Component } from '../../filters/product-section-filter-2/product-section-filter-2.component';
import { ProductSectionContent2Component } from '../product-section-content-2/product-section-content-2.component';
import { ProductSectionContent3Component } from '../product-section-content-3/product-section-content-3.component';

@Component({
  selector: 'app-product-section-content-1',
  templateUrl: './product-section-content-1.component.html',
  styleUrls: ['./product-section-content-1.component.scss']
})
export class ProductSectionContent1Component {
  public constructor() {
  }

  public s2: IScenario = {
    content: ProductSectionContent2Component,
    filter: ProductSectionFilter2Component,
    action: ProductSectionAction2Component
  };

  public s3: IScenario = {
    content: ProductSectionContent3Component,
    action: ProductSectionAction3Component
  };

  public pageData$: Observable<DesktopData> = of({
    items: [
      {
        tabLabel: 'TAB_1',
        grid: [
          [this.s2]
        ]
      },
      {
        tabLabel: 'TAB_2',
        grid: [
          [this.s2, this.s2],
          [this.s3, this.s3]
        ]

      },
      {
        tabLabel: 'TAB_3',
        grid: [
          [this.s2, this.s2],
          [this.s3, this.s3]
        ]
      }
    ]
  });
}
