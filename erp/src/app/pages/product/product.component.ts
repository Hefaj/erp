import { Component } from '@angular/core';
import { ProductSectionContent1Component } from './sections/contents/product-section-content-1/product-section-content-1.component';
import { ProductSectionContent2Component } from './sections/contents/product-section-content-2/product-section-content-2.component';

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
}
