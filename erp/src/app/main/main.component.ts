import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CloseMenu } from '../state/aplication/application.actions';
import { ApplicationSelector } from '../state/aplication/application.selector';
import { MenuStatus, EditedStatus } from '../state/aplication/application.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Select(ApplicationSelector.getMenuStatus) menuStatus$! : Observable<MenuStatus>;
  @Select(ApplicationSelector.getEditedStatus) editedStatus$! : Observable<EditedStatus>;

  public constructor(private _store: Store) {

  }

  public MenuStatus = MenuStatus;
  public EditedStatus = EditedStatus;

  public close(): void {
    this._store.dispatch(new CloseMenu());
  }
}