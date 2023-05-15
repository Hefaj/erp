import { NgxsModule } from '@ngxs/store';
import { ProductState } from './state/product.state';
import { NgModule } from "@angular/core";
import { ProductComponent } from './product.component';
import { ProductSectionContent1Component } from './sections/contents/product-section-content-1/product-section-content-1.component';
import { ProductSectionContent2Component } from './sections/contents/product-section-content-2/product-section-content-2.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ProductSectionAction1Component } from './sections/actions/product-section-action-1/product-section-action-1.component';
import { ProductSectionFilter1Component } from './sections/filters/product-section-filter-1/product-section-filter-1.component';
import { ProductSectionContent3Component } from './sections/contents/product-section-content-3/product-section-content-3.component';
import { ProductSectionAction2Component } from './sections/actions/product-section-action-2/product-section-action-2.component';
import { ProductSectionAction3Component } from './sections/actions/product-section-action-3/product-section-action-3.component';
import { ProductSectionFilter2Component } from './sections/filters/product-section-filter-2/product-section-filter-2.component';
import { ProductSectionFilter3Component } from './sections/filters/product-section-filter-3/product-section-filter-3.component';
import { TemplateModule } from 'src/app/core/templates/template.module';

@NgModule({
  declarations: [
    ProductSectionAction1Component,
    ProductSectionAction2Component,
    ProductSectionAction3Component,
    ProductSectionFilter1Component,
    ProductSectionFilter2Component,
    ProductSectionFilter3Component,
    ProductSectionContent1Component,
    ProductSectionContent2Component,
    ProductSectionContent3Component,
    ProductComponent,
  ],
  imports: [
    TemplateModule,
    CommonModule,
    MaterialModule,
    NgxsModule.forFeature([ProductState]),
  ]
})
export class ProductModule {}
