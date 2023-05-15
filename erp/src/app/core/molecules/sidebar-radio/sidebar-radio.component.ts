import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarHeaderComponent } from '../sidebar-header/sidebar-header.component';
import { GroupRadioComponent } from '../group-radio/group-radio.component';
import { BaseComponent } from '../../directives/BaseComponent';
import SidebarRadioData from './models/SidebarRadioData';
import { PipeModule } from '../../pipes/pipe.module';
import SidebarRadioConfig from './models/SidebarRadioConfig';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar-radio',
  standalone: true,
  imports: [CommonModule, SidebarHeaderComponent, GroupRadioComponent, PipeModule],
  templateUrl: './sidebar-radio.component.html',
  styleUrls: ['./sidebar-radio.component.scss']
})
export class SidebarRadioComponent extends BaseComponent<SidebarRadioConfig, SidebarRadioData> {

  public constructor(@Inject('data$') public inputData: Observable<any>) {
    super({}, inputData);
  }
}
