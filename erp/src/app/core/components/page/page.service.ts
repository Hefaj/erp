import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

export interface ITabPage {
  tabLabel: string;
  grid?: IScenario[][];
  tabs?: ITabPage[];
}

export interface IScenario {
  content: any,
  filter?: any,
  action?: any
}

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private _tabs$: BehaviorSubject<ITabPage[]>;
  private _brain: Map<string, IScenario>;
  private _focused$: BehaviorSubject<IScenario>;

  public constructor() {
    this._tabs$ = new BehaviorSubject([] as ITabPage[]);
    this._brain = new Map();
    this._focused$ = new BehaviorSubject({content: undefined});
  }

  public getAction(): Observable<any> {
    return this._focused$.pipe(map(x => x.action));
  }

  public getFilter(): Observable<any> {
    return this._focused$.pipe(map(x => x.filter));
  }

  public getContent(): Observable<ITabPage[]> {
    return this._tabs$;
  }

  public init(tabs: ITabPage[]) {
    this._prepareTabs(tabs);
    this._prepareScenarioDictionary(tabs);
    this._focused$.next(Array.from(this._brain)[0][1]);
  }

  public setFocus(focued: any): void {
    if (this._brain.has(focued)) {
      this._focused$.next(this._brain.get(focued)!);
    }
  }

  private _prepareTabs(tabs: ITabPage[]) {
    this._tabs$.next(tabs);
  }

  private _prepareScenarioDictionary(tabs: ITabPage[] | undefined): void {
    if (!tabs) return;
    
    for (let tab of tabs) {
      if (tab.grid) {
        for (let column of tab.grid) {
          for (let row of column) {
            this._brain.set(row.content, {
              content: row.content,
              action: row.action,
              filter: row.filter
            });
          }
        }
      } else {
        this._prepareScenarioDictionary(tab.tabs);
      }
    }
  }
}