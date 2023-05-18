import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import IScenario from './models/IScenario';

@Injectable({
  providedIn: 'root'
})
export class DesktopService {
  private _active: WritableSignal<IScenario | undefined> = signal(undefined);
  private _scenarios: Map<any, IScenario> = new Map();

  public getActive(): Signal<IScenario | undefined> {
    return this._active;
  }

  public attach(scenarios: IScenario[]): void {
    scenarios.forEach(x => this._scenarios.has(x.content) ? this._scenarios.set(x.content, x) : undefined);
  }

  public changeActive(contentComponent: any): void {
    if (this._active()?.content === contentComponent) {
      return;
    }

    if (!this._scenarios.has(contentComponent)) {
      throw new Error("Missing scenario.");

    }

    this._active.set(this._scenarios.get(contentComponent));
  }
}
