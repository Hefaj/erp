import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import LabelConfig from './models/LabelConfig';
import LabelData from './models/LabelData';
import { BaseComponent } from '../../directives/BaseComponent';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent extends BaseComponent<LabelConfig, LabelData> {
  public constructor() {
    super({});
  }
}
