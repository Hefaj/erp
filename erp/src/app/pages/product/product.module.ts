import { NgxsModule } from '@ngxs/store';
import { ProductState } from './state/product.state';
import { NgModule } from "@angular/core";
import { ProductComponent } from './product.component';
import { PageSectionsComponent } from 'src/app/core/components/page-sections/page-sections.component';
import { TabMenuContainerComponent } from 'src/app/core/components/tab-menu-container/tab-menu-container.component';
import { ProductSectionContent1Component } from './sections/contents/product-section-content-1/product-section-content-1.component';
import { ProductSectionContent2Component } from './sections/contents/product-section-content-2/product-section-content-2.component';
import { CommonModule } from '@angular/common';
import { SidebarContainerComponent } from 'src/app/core/components/sidebar-container/sidebar-container.component';
import { MaterialModule } from 'src/app/material.module';
import { ProductSectionAction1Component } from './sections/actions/product-section-action-1/product-section-action-1.component';
import { ContentGridComponent } from 'src/app/core/components/content-grid/content-grid.component';
import { TableComponent } from 'src/app/core/organisms/table/table.component';
import { ProductSectionFilter1Component } from './sections/filters/product-section-filter-1/product-section-filter-1.component';
import { ProductSectionContent3Component } from './sections/contents/product-section-content-3/product-section-content-3.component';
import { ProductSectionAction2Component } from './sections/actions/product-section-action-2/product-section-action-2.component';
import { ProductSectionAction3Component } from './sections/actions/product-section-action-3/product-section-action-3.component';
import { ProductSectionFilter2Component } from './sections/filters/product-section-filter-2/product-section-filter-2.component';
import { ProductSectionFilter3Component } from './sections/filters/product-section-filter-3/product-section-filter-3.component';
import { PageComponent } from 'src/app/core/components/page/page.component';
import { PageDesktopComponent } from 'src/app/core/templates/page-desktop/page-desktop.component';

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
    TableComponent,
  ],
  imports: [
    SidebarContainerComponent,
    PageSectionsComponent,
    TabMenuContainerComponent,
    ContentGridComponent,

    PageComponent,


    PageDesktopComponent,

    CommonModule,
    MaterialModule,
    NgxsModule.forFeature([ProductState]),
  ]
})
export class ProductModule {}
