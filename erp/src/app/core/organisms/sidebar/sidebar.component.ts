import { Component, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculeModule } from '../../molecules/molecule.module';
import { SidebarService } from './sidebar.service';
import { BaseComponent } from '../../directives/BaseComponent';
import SidebarConfig from './models/SidebarConfig';
import SidebarData from './models/SidebarData';
import { PipeModule } from '../../pipes/pipe.module';
import { SidebarHeaderClickDirective } from '../../directives/sidebar-header-click.directive';
import { SidebarContentItem } from './models/SidebarContentItem';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MoleculeModule, PipeModule, SidebarHeaderClickDirective],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [SidebarService]
})
export class SidebarComponent extends BaseComponent<SidebarConfig, SidebarData> implements OnInit {
  public acviteItem!: Signal<SidebarContentItem | undefined>;

  public constructor(public sidebarService: SidebarService) {
    super({});
  }

  public ngOnInit(): void {
    this.data$.subscribe(x => {
      this.sidebarService.init(x);
    });
    this.acviteItem = this.sidebarService.getActiveItem();
  }
}
