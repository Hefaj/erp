import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculeModule } from '../../molecules/molecule.module';
import { SidebarService } from './sidebar.service';
import { BaseComponent } from '../../directives/BaseComponent';
import SidebarConfig from './models/SidebarConfig';
import SidebarData from './models/SidebarData';
import { PipeModule } from '../../pipes/pipe.module';
import { SidebarHeaderClickDirective } from '../../directives/sidebar-header-click.directive';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MoleculeModule, PipeModule, SidebarHeaderClickDirective],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends BaseComponent<SidebarConfig, SidebarData> {

  public constructor(public sidebarService: SidebarService) {
    super({});
  }
}
