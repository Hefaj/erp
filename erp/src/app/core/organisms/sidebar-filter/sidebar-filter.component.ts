import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../../directives/BaseComponent';
import SidebarFilterConfig from './models/SidebarFilterConfig';
import SidebarFilterData from './models/SidebarFilterData';
import { SidebarFilterItemPipe } from './pipes/sidebar-filter-item.pipe';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-sidebar-filter',
  standalone: true,
  imports: [CommonModule, SidebarComponent, SidebarFilterItemPipe],
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.scss']
})
export class SidebarFilterComponent extends BaseComponent<SidebarFilterConfig, SidebarFilterData> {

  public constructor() {
    super({});
  }

}
