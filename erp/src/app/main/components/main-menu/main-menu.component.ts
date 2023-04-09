import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { CloseMenu } from 'src/app/state/aplication/application.actions';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  public constructor(private _store: Store) {
    
  }
  public closeMenu(): void {
    this._store.dispatch(new CloseMenu());
  }
}