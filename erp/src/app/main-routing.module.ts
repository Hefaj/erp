import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './config/routers';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
