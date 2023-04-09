import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngxs/store';
import { ResetEdited } from 'src/app/state/aplication/application.actions';

@Component({
  selector: 'app-change-bar',
  templateUrl: './change-bar.component.html',
  styleUrls: ['./change-bar.component.scss'],
})
export class ChangeBarComponent {
  public constructor(private _snackBar: MatSnackBar, private _store: Store) {

  }

  public openSnackBar(message: string) {
    this._store.dispatch(new ResetEdited());
    this._snackBar.open(message, '',
      {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
  }
}