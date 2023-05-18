import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MaterialModule } from 'src/app/material.module';
import { BaseComponent } from '../../directives/BaseComponent';
import GroupPillConfig from './models/GroupPillConfig';
import GroupPillData from './models/GroupPillData';
import { ThemePalette } from '@angular/material/core';
import GroupPillItem from './models/GroupPillItem';
import { MatRadioChange } from '@angular/material/radio';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-group-pill',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './group-pill.component.html',
  styleUrls: ['./group-pill.component.scss']
})
export class GroupPillComponent extends BaseComponent<GroupPillConfig, GroupPillData> {

  public constructor() {
    super({});
  }

  @Output() change = new EventEmitter<number>();

  public changeSelection(event: MatRadioChange): void {

  }

  public drop(event: CdkDragDrop<string[]>) {
    //moveItemInArray(this.availableColors, event.previousIndex, event.currentIndex);
  }

  remove(item: GroupPillItem, data: GroupPillData): void {
    const index = data.items.indexOf(item);

    if (index >= 0) {
      this.change.emit(item.id);
    }
  }
}
