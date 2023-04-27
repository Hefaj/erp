import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ITabPage, PageService } from '../page/page.service';

@Component({
  standalone: true,
  selector: 'app-tab-menu-container',
  templateUrl: './tab-menu-container.component.html',
  styleUrls: ['./tab-menu-container.component.scss'],
  imports: [ MaterialModule, CommonModule ]
})
export class TabMenuContainerComponent implements OnInit {

  @Input() public data$!: Observable<ITabPage[]>;
  public grid: any[];

  
  public constructor(private _store: Store, private _pageService: PageService) {
    this.grid = [];
  }

  public ngOnInit(): void {
    this.data$.subscribe(tabs => {
      this._preparedData(tabs);
    });
  }

  private _preparedData(tabs: ITabPage[] | undefined) {

    if (!tabs) return;

    for (let tab of tabs) {
      if (tab.grid) {
        const flat = tab.grid.flat();
        const unique = Array.from(new Set(flat));
        let str = this.getGridTemplateString(tab, unique);

        this.grid.push({
          label: tab.tabLabel,
          pattern: str,
          components: flat.map(component => {
            return {
              component: component,
              gridName: 's' + unique.findIndex(x => x === component)
            };
          })
        });
      } else {
        this._preparedData(tab.tabs);
      }
    }
  }

  private getGridTemplateString(tab: ITabPage, a: any[]) {
    if (!tab.grid) return;

    let str = '';
    for (let column of tab.grid) {
      str += '"';
      for (let row of column) {
        str += `s${a.findIndex(x => x === row)} `;
      }
      str += '" ';
    }
    return str;
  }

  public tabChange(idx: number) :void {
    this._pageService.setFocus(this.grid[idx].components[0].component);
  }
}