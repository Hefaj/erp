import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductSectionAction1Component } from '../product/sections/actions/product-section-action-1/product-section-action-1.component';
import { ProductSectionAction2Component } from '../product/sections/actions/product-section-action-2/product-section-action-2.component';
import { ProductSectionAction3Component } from '../product/sections/actions/product-section-action-3/product-section-action-3.component';
import { ProductSectionContent1Component } from '../product/sections/contents/product-section-content-1/product-section-content-1.component';
import { ProductSectionContent2Component } from '../product/sections/contents/product-section-content-2/product-section-content-2.component';
import { ProductSectionContent3Component } from '../product/sections/contents/product-section-content-3/product-section-content-3.component';
import { ProductSectionFilter1Component } from '../product/sections/filters/product-section-filter-1/product-section-filter-1.component';
import { ProductSectionFilter2Component } from '../product/sections/filters/product-section-filter-2/product-section-filter-2.component';
import { ProductSectionFilter3Component } from '../product/sections/filters/product-section-filter-3/product-section-filter-3.component';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {
  // public s1: IScenario = {
  //   content: ProductSectionContent1Component,
  //   filter: ProductSectionFilter1Component,
  //   action: ProductSectionAction1Component
  // };

  // public s2: IScenario = {
  //   content: ProductSectionContent2Component,
  //   filter: ProductSectionFilter2Component,
  //   action: ProductSectionAction2Component
  // };

  // public s3: IScenario = {
  //   content: ProductSectionContent3Component,
  //   filter: ProductSectionFilter3Component,
  //   action: ProductSectionAction3Component
  // };
}
