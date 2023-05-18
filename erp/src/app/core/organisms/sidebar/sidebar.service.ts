import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import SidebarData from './models/SidebarData';
import { SidebarContentItem } from './models/SidebarContentItem';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _activeItem: WritableSignal<SidebarContentItem | undefined> = signal(undefined);
  private _collection: WritableSignal<SidebarData | undefined> = signal(undefined);

  public constructor() { }

  public getActiveItem(): Signal<SidebarContentItem | undefined> {
    return this._activeItem;
  }

  public init(data: SidebarData): void {
    this._collection.set(data);
  }

  public clickPlus(idx: number): void {
    if (idx >= (this._collection()?.items.length ?? 0)) {
      throw new Error("Index out of range");
    }

    const selectedItem = this._collection()!.items.at(idx);
    this._activeItem.set(selectedItem === this._activeItem() ? undefined : selectedItem);
  }
}
