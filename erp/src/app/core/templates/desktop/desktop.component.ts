import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import DesktopData from './models/DesktopData';
import DesktopConfig from './models/DesktopConfig';
import { BaseComponent } from '../../directives/BaseComponent';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent extends BaseComponent<DesktopConfig, DesktopData> implements OnInit {

  public constructor() {
    super({});
  }
  public ngOnInit(): void {

  }
}
