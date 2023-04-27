import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PageService } from '../page/page.service';

export interface ITabMenu {
  tabLabel: string;
  grid: any[][];
}

@Component({
  standalone: true,
  selector: 'app-tab-menu-container',
  templateUrl: './tab-menu-container.component.html',
  styleUrls: ['./tab-menu-container.component.scss'],
  imports: [ MaterialModule, CommonModule ]
})
export class TabMenuContainerComponent implements OnInit {

  @Input() public data$!: Observable<ITabMenu[]>;
  public grid: any[];

  
  public constructor(private _store: Store, private _pageService: PageService) {
    this.grid = [];
  }

  public ngOnInit(): void {
    this.data$.subscribe(tabs => {
      for (let tab of tabs) {
        
        const width = tab.grid.length;
        const height = tab.grid.at(0)?.length;

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
      }
    });
  }

  private getGridTemplateString(tab: ITabMenu, a: any[]) {
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

  public focus(focused: any) :void {
    this._pageService.setFocus(focused);
  }  
  
  public tabChange(idx: number) :void {
    this._pageService.setFocus(this.grid[idx].components[0].component);
  }
}