import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { ApplicationSelector } from 'src/app/state/aplication/application.selector';
import { FilterItem } from 'src/app/state/aplication/application.state';

@Component({
  standalone: true,
  selector: 'app-selected-filter-list',
  templateUrl: './selected-filter-list.component.html',
  styleUrls: ['./selected-filter-list.component.scss'],
  imports: [ MaterialModule, CommonModule ]
})
export class SelectedFilterListComponent {
  @Select(ApplicationSelector.getFilteredItems) public filteredItems$!: Observable<FilterItem[]>;

}
