import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { MaterialModule } from 'src/app/material.module';
import { ProductSectionContent1Component } from 'src/app/pages/product/sections/contents/product-section-content-1/product-section-content-1.component';
import { PageService } from '../page/page.service';

@Component({
  standalone: true,
  selector: 'app-content-grid',
  templateUrl: './content-grid.component.html',
  styleUrls: ['./content-grid.component.scss'],
  imports: [ MaterialModule, CommonModule ]
})
export class ContentGridComponent {
  @Input() public grid!: any[];

  public constructor(private _store: Store, private _pageService: PageService) {}

  public tabClicked(row: any): void {
    this._pageService.setFocus(ProductSectionContent1Component);
  }
}
