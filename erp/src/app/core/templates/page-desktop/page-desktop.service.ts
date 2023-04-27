import { Injectable } from '@angular/core';
import { IScenario } from '../../components/page/page.service';
import { IPageDesktopData } from './models/IPageDesktopData';
import { IPageDesktopItem } from './models/IPageDesktopItem';

@Injectable({
  providedIn: 'root'
})
export class PageDesktopService {
  private _brain: Map<string, IScenario>;
  public constructor() { 
    this._brain = new Map();
  }

  public init(data: IPageDesktopData) {
    const unique = this._getAllComponents(data.items);
  }

  private _getAllComponents(items: IPageDesktopItem[]): Set<any> {
    let allGridItems: any[] = [];

    for (let item of items) {
      if (item.grid) {
        
        allGridItems = allGridItems.concat(...item.grid);
      } else if (item.subItems) {
        allGridItems = allGridItems.concat(...this._getAllComponents(item.subItems));
      }
    }

    return new Set(allGridItems.map(x => x.content).filter(x => x));
  }

}
