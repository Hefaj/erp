import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public constructor() { }

  public init(): void {

  }

  public clickPlus(n: number): void {
    console.warn(n);
  }
}
