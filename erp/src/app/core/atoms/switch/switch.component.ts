import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import SwitchConfig from './models/SwitchConfig';
import SwitchData from './models/SwitchData';
import { BaseComponent } from '../../directives/BaseComponent';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent extends BaseComponent<SwitchConfig, SwitchData> {
  public constructor() {
    super({});
  }
}
