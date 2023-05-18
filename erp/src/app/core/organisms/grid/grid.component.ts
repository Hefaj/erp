import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../../directives/BaseComponent';
import GridConfig from './models/GridConfig';
import GridData from './models/SidebarData';
import { GridTemplateAreasPipe } from './pipes/grid-template-areas.pipe';
import { GridAreaPipe } from './pipes/grid-area.pipe';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, GridTemplateAreasPipe, GridAreaPipe],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent extends BaseComponent<GridConfig, GridData> implements OnInit {

  public constructor() {
    super({});
  }

  public ngOnInit(): void {
  }

}
