import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { MaterialModule } from 'src/app/material.module';

@Component({
  standalone: true,
  selector: 'app-content-grid',
  templateUrl: './content-grid.component.html',
  styleUrls: ['./content-grid.component.scss'],
  imports: [ MaterialModule, CommonModule ]
})
export class ContentGridComponent {
  @Input() public grid!: any[];

  public constructor(private _store: Store) {}

  public tabClicked(row: any): void {
    console.warn(row);
  }
}
