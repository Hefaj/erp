import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { ProductSectionContent1Component } from 'src/app/pages/product/sections/contents/product-section-content-1/product-section-content-1.component';
import { ProductSectionContent2Component } from 'src/app/pages/product/sections/contents/product-section-content-2/product-section-content-2.component';
import { SidebarContainerComponent } from '../sidebar-container/sidebar-container.component';
import { ITabMenu, TabMenuContainerComponent } from '../tab-menu-container/tab-menu-container.component';
import { ITabPage, PageService } from './page.service';

@Component({
  standalone: true,
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  imports: [ MaterialModule, CommonModule, TabMenuContainerComponent, SidebarContainerComponent ]
})
export class PageComponent implements OnInit {
  @Input() public config!: ITabPage[];

  //@Select(ApplicationSelector.getActionComponent) actionComponent$! : Observable<any>;
  
  public tab$!: Observable<ITabMenu[]>;
  public action$!: Observable<any>;
  public filter$!: Observable<any>;

  public constructor(public pageService: PageService) {
  }

  public ngOnInit(): void {
    this.pageService.init(this.config);
    this.action$ = this.pageService.getAction();
    this.filter$ = this.pageService.getFilter();
    this.tab$ = this.pageService.getContent();
  }
}
