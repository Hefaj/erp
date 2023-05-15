import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import CheckboxConfig from './models/CheckboxConfig';
import CheckboxData from './models/CheckboxData';
import { BaseComponent } from '../../directives/BaseComponent';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends BaseComponent<CheckboxConfig, CheckboxData> {
  public constructor() {
    super({});
  }
}
