import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { IPageDesktopData } from './models/IPageDesktopData';
import { PageDesktopService } from './page-desktop.service';

@Component({
  standalone: true,
  selector: 'app-page-desktop',
  templateUrl: './page-desktop.component.html',
  styleUrls: ['./page-desktop.component.scss'],
  imports: [ MaterialModule, CommonModule ]
})
export class PageDesktopComponent implements OnInit {
  public action$!: Observable<any>;
  public filter$!: Observable<any>;

  @Input() public data!: IPageDesktopData;

  public constructor(public _pageDesktopService: PageDesktopService) {
    
  }
  public ngOnInit(): void {
    this._pageDesktopService.init(this.data);
  }
}
