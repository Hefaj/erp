import { Component, HostListener, OnInit } from '@angular/core';
import { PageService } from 'src/app/core/components/page/page.service';
import { TableComponent } from 'src/app/core/organisms/table/table.component';
import ScenarioContent from 'src/app/core/directives/ScenarioContent';
import { ProductSectionAction1Component } from '../../actions/product-section-action-1/product-section-action-1.component';

@Component({
  selector: 'app-product-section-content-1',
  templateUrl: './product-section-content-1.component.html',
  styleUrls: ['./product-section-content-1.component.scss']
})
export class ProductSectionContent1Component extends ScenarioContent {
  public constructor(public override _pageService: PageService) {
    super(ProductSectionContent1Component, _pageService);
  }
}
