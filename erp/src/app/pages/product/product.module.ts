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

@NgModule({
  declarations: [
    ProductSectionContent1Component,
    ProductSectionContent2Component,
    ProductComponent,
  ],
  imports: [
    SidebarContainerComponent,
    PageSectionsComponent,
    TabMenuContainerComponent,
    
    CommonModule,
    NgxsModule.forFeature([ProductState]),
  ]
})
export class ProductModule {}