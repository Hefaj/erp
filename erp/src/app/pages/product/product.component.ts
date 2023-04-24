import { Component } from '@angular/core';
import { ProductSectionAction1Component } from './sections/actions/product-section-action-1/product-section-action-1.component';
import { ProductSectionAction2Component } from './sections/actions/product-section-action-2/product-section-action-2.component';
import { ProductSectionAction3Component } from './sections/actions/product-section-action-3/product-section-action-3.component';
import { ProductSectionContent1Component } from './sections/contents/product-section-content-1/product-section-content-1.component';
import { ProductSectionContent2Component } from './sections/contents/product-section-content-2/product-section-content-2.component';
import { ProductSectionContent3Component } from './sections/contents/product-section-content-3/product-section-content-3.component';
import { ProductSectionFilter1Component } from './sections/filters/product-section-filter-1/product-section-filter-1.component';
import { ProductSectionFilter2Component } from './sections/filters/product-section-filter-2/product-section-filter-2.component';
import { ProductSectionFilter3Component } from './sections/filters/product-section-filter-3/product-section-filter-3.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  public tabs: any[] = [
    {
      label: 'Produkty',
      component: ProductSectionContent1Component,
    },
    {
      label: 'Multimedia',
      component: ProductSectionContent2Component,
    }
  ];

  public page: any[] = [
    {
      label: 'TAB_1',
      grid: [
        [
          {
            content: ProductSectionContent1Component,
            filter: ProductSectionFilter1Component,
            action: ProductSectionAction1Component
          },
          {
            content: ProductSectionContent2Component,
            filter: ProductSectionFilter2Component,
            action: ProductSectionAction2Component
          }
        ],
        [
          {
            content: ProductSectionContent3Component,
            filter: ProductSectionFilter3Component,
            action: ProductSectionAction3Component
          },
        ]
      ]
    }
  ];
}
