import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../../pipes/pipe.module';
import { GroupPillComponent } from '../group-pill/group-pill.component';
import { SidebarHeaderComponent } from '../sidebar-header/sidebar-header.component';
import { Observable } from 'rxjs';
import { BaseComponent } from '../../directives/BaseComponent';
import SidebarPillConfig from './models/SidebarPillConfig';
import SidebarPillData from './models/SidebarPillData';

@Component({
  selector: 'app-sidebar-pill',
  standalone: true,
  imports: [CommonModule, SidebarHeaderComponent, GroupPillComponent, PipeModule],
  templateUrl: './sidebar-pill.component.html',
  styleUrls: ['./sidebar-pill.component.scss'],
})
export class SidebarPillComponent extends BaseComponent<SidebarPillConfig, SidebarPillData> {

  public constructor(@Inject('data$') public inputData: Observable<any>) {
    super({}, inputData);
  }
}
