import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import IconConfig from './models/IconConfig';
import IconData from './models/IconData';
import { BaseComponent } from '../../directives/BaseComponent';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent extends BaseComponent<IconConfig, IconData> {
  public constructor() {
    super({});
  }
}
