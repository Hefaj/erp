import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ITabPage, IScenario } from 'src/app/core/components/page/page.service';
import { IPageDesktopData } from 'src/app/core/templates/page-desktop/models/IPageDesktopData';
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
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  public constructor(private _store: Store) {
    
  }

  public s1: IScenario = {
    content: ProductSectionContent1Component,
    filter: ProductSectionFilter1Component,
    action: ProductSectionAction1Component
  };

  public s2: IScenario = {
    content: ProductSectionContent2Component,
    filter: ProductSectionFilter2Component,
    action: ProductSectionAction2Component
  };

  public s3: IScenario = {
    content: ProductSectionContent3Component,
    action: ProductSectionAction3Component
  };

  public page: ITabPage[] = [
    {
      tabLabel: 'TAB_1',
      tabs: [
        {
          tabLabel: 'SUBTAB_1',
          grid: [
            [ this.s2, this.s1, this.s1 ],
            [ this.s3, this.s3, this.s3 ]
          ],
        },
        {
          tabLabel: 'SUBTAB_2',
          grid: [
            [ this.s2 ],
            [ this.s3 ]
          ],
        }
      ]
    },
    {
      tabLabel: 'TAB_2',
      grid: [
        [ this.s1, this.s3, this.s3 ],
        [ this.s1, this.s2, this.s2 ]
      ]
    },
    {
      tabLabel: 'TAB_3',
      grid: [
        [ this.s3 ],
      ]
    }
  ];


  public pageData: IPageDesktopData = {
    items: [
      {
        tabLabel: 'TAB_1',
        grid: [
          [this.s1]
        ]
      },
      {
        tabLabel: 'TAB_2',
        subItems: [
          {
            tabLabel: 'SUBTAB_1',
            grid: [
              [this.s1, this.s2]
            ]
          },
          {
            tabLabel: 'SUBTAB_2',
            grid: [
              [this.s2]
            ]
          }
        ]
      },
      {
        tabLabel: 'TAB_3',
        grid: [
          [this.s1, this.s2],
          [this.s3, this.s3]
        ]
      }
    ]
  };
}
