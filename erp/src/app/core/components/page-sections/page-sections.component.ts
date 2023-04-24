import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { ApplicationSelector } from 'src/app/state/aplication/application.selector';
import { SectionStatus } from 'src/app/state/aplication/application.state';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { SelectedFilterListComponent } from '../selected-filter-list/selected-filter-list.component';
import { SidebarContainerComponent } from '../sidebar-container/sidebar-container.component';

@Component({
  standalone: true,
  selector: 'app-page-sections',
  templateUrl: './page-sections.component.html',
  styleUrls: ['./page-sections.component.scss'],
  imports: [ MaterialModule, CommonModule, SelectedFilterListComponent, SidebarContainerComponent ]
})
export class PageSectionsComponent {
  @Select(ApplicationSelector.getFilterSectionStatus) public filterSectionStatus$!: Observable<SectionStatus>;
  @Select(ApplicationSelector.getActionSectionStatus) public actionSectionStatus$!: Observable<SectionStatus>;

  public SectionStatus = SectionStatus;

  public constructor() {}
}
