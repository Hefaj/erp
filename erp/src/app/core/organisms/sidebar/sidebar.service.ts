import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import SidebarData from './models/SidebarData';
import { SidebarContentItem } from './models/SidebarContentItem';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _activeItem: WritableSignal<SidebarContentItem | undefined> = signal(undefined);
  private _branin: WritableSignal<SidebarData | undefined> = signal(undefined);

  public constructor() { }

  public getActiveItem(): Signal<SidebarContentItem | undefined> {
    console.warn('getActiveItem call');
    return this._activeItem;
  }

  public init(data: SidebarData): void {
    console.warn('getActiveItem call');
    this._branin.set(data);
  }

  public clickPlus(idx: number): void {
    if (idx >= (this._branin()?.items.length ?? 0)) {
      throw new Error("Index out of range");
    }

    this._activeItem.set(this._branin()!.items.at(idx) === this._activeItem() ? undefined : this._branin()!.items.at(idx));
  }
}
