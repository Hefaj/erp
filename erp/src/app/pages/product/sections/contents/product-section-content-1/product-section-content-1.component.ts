import { Component } from '@angular/core';
import { TableComponent } from 'src/app/core/organisms/table/table.component';
import { ProductSectionAction1Component } from '../../actions/product-section-action-1/product-section-action-1.component';

@Component({
  selector: 'app-product-section-content-1',
  templateUrl: './product-section-content-1.component.html',
  styleUrls: ['./product-section-content-1.component.scss']
})
export class ProductSectionContent1Component {
  public grid = [
    [
      {
        component: TableComponent,
        filter: ProductSectionAction1Component,
        action: ProductSectionAction1Component,
      },
    ]
  ];
}
