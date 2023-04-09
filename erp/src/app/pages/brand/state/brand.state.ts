import { Injectable } from '@angular/core';
import { State, Action, StateContext, NgxsOnInit } from '@ngxs/store';

export interface BrandStateStateModel {
}


export type LocalStateModel = BrandStateStateModel;
export type LocalStateContext = StateContext<BrandStateStateModel>;

@State<LocalStateModel>({
  name: 'BrandState',
  defaults: {
  }
})

@Injectable()
export class BrandState implements NgxsOnInit {
  ngxsOnInit(ctx: StateContext<any>): void {
    console.log('init BrandState');
  }


}