import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { OpenMenu } from 'src/app/state/aplication/application.actions';
import { ApplicationSelector } from 'src/app/state/aplication/application.selector';
import { MenuStatus } from 'src/app/state/aplication/application.state';

@Component({
  selector: 'app-breadcrumbs-bar',
  templateUrl: './breadcrumbs-bar.component.html',
  styleUrls: ['./breadcrumbs-bar.component.scss']
})
export class BreadcrumbsBarComponent {
  @Select(ApplicationSelector.getMenuStatus) menuStatus$! : Observable<MenuStatus>;

  public constructor(private _store: Store) {
  }

  public openMenu(): void {
    this._store.dispatch(new OpenMenu());
  }
}