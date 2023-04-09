import { Injectable } from '@angular/core';
import { State, Action, StateContext, NgxsOnInit } from '@ngxs/store';

export interface ProductStateStateModel {
}


export type LocalStateModel = ProductStateStateModel;
export type LocalStateContext = StateContext<ProductStateStateModel>;

@State<LocalStateModel>({
  name: 'ProductState',
  defaults: {
  }
})

@Injectable()
export class ProductState implements NgxsOnInit {
  ngxsOnInit(ctx: StateContext<any>): void {
    console.log('init ProductState');
  }


}