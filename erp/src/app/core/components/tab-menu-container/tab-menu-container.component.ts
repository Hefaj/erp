import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { SectionStatus } from 'src/app/state/aplication/application.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ApplicationSelector } from 'src/app/state/aplication/application.selector';
import { ToggleSectionActionStatus, ToggleSectionFilterStatus } from 'src/app/state/aplication/application.actions';

@Component({
  standalone: true,
  selector: 'app-tab-menu-container',
  templateUrl: './tab-menu-container.component.html',
  styleUrls: ['./tab-menu-container.component.scss'],
  imports: [ MaterialModule, CommonModule ]
})
export class TabMenuContainerComponent {

  @Select(ApplicationSelector.getFilterSectionStatus) public filterSectionStatus$!: Observable<SectionStatus>;
  @Select(ApplicationSelector.getActionSectionStatus) public actionSectionStatus$!: Observable<SectionStatus>;

  @Input() public data!: any[];

  public SectionStatus = SectionStatus;
  
  public constructor(private _store: Store) {
    
  }

  public toggleSectionAction(): void {
    this._store.dispatch(new ToggleSectionActionStatus());
  }

  public toggleSectionFilter(): void {
    this._store.dispatch(new ToggleSectionFilterStatus());
  }
}