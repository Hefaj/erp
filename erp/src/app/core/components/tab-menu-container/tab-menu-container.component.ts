import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tab-menu-container',
  templateUrl: './tab-menu-container.component.html',
  styleUrls: ['./tab-menu-container.component.scss'],
  imports: [ MaterialModule, CommonModule ]
})
export class TabMenuContainerComponent {

  @Input() public data!: any[];

  public constructor() {
    
  }
}