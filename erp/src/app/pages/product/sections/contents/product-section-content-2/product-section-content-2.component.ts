import { Component } from '@angular/core';
import { PageService } from 'src/app/core/components/page/page.service';
import ScenarioContent from 'src/app/core/directives/ScenarioContent';

@Component({
  selector: 'app-product-section-content-2',
  templateUrl: './product-section-content-2.component.html',
  styleUrls: ['./product-section-content-2.component.scss']
})
export class ProductSectionContent2Component extends ScenarioContent {
  public constructor(public override _pageService: PageService) {
    super(ProductSectionContent2Component, _pageService);
  }
}