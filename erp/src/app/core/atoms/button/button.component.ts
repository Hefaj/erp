import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ButtonConfig from './models/ButtonConfig';
import ButtonData from './models/ButtonData';
import { BaseComponent } from '../../directives/BaseComponent';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends BaseComponent<ButtonConfig, ButtonData> {
  public constructor() {
    super({});
  }
}
