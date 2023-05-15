import { ModuleWithProviders, NgModule, Type } from "@angular/core";
import { AsObservablePipe } from "./as-observable.pipe";
import { AsInjectorPipe } from "./as-injector.pipe";

const pipes: (any[] | Type<any> | ModuleWithProviders<{}>)[] | undefined = [
  AsObservablePipe,
  AsInjectorPipe,
];

@NgModule({
  declarations: [
    pipes
  ],
  imports: [
  ],
  exports: [
    pipes
  ]
})
export class PipeModule {}
