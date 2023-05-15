import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../../directives/BaseComponent';
import SidebarHeaderData from './models/SidebarHeaderData';
import { MaterialModule } from 'src/app/material.module';
import { AtomModule } from '../../atoms/atom.module';
import SidebarHeaderConfig from './models/SidebarHeaderConfig';

@Component({
  selector: 'app-sidebar-header',
  standalone: true,
  imports: [CommonModule, MaterialModule, AtomModule],
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss']
})
export class SidebarHeaderComponent extends BaseComponent<SidebarHeaderConfig, SidebarHeaderData> {

  @Output() plusClicked: EventEmitter<void>;

  public constructor() {
    super({});

    this.plusClicked = new EventEmitter();
  }

  public clicked(): void {

  }
}
