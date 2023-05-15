import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import PillConfig from './models/PillConfig';
import PillData from './models/PillData';
import { BaseComponent } from '../../directives/BaseComponent';

@Component({
  selector: 'app-pill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent extends BaseComponent<PillConfig, PillData> {
  public constructor() {
    super({});
  }
}
