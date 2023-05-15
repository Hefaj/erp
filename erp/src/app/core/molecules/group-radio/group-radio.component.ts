import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { BaseComponent } from '../../directives/BaseComponent';
import GroupRadioData from './models/GroupRadioData';
import { MatRadioChange } from '@angular/material/radio';
import GroupRadioConfig from './models/GroupRadioConfig';

@Component({
  selector: 'app-group-radio',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './group-radio.component.html',
  styleUrls: ['./group-radio.component.scss']
})
export class GroupRadioComponent extends BaseComponent<GroupRadioConfig, GroupRadioData> {

  @Output() change = new EventEmitter<number>();

  public constructor() {
    super({});
  }

  public changeSelection(event: MatRadioChange): void {
    this.change.emit(event.value);
  }
}
