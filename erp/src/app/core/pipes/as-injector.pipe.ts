import { Injector, Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';

@Pipe({
  name: 'asInjector'
})
export class AsInjectorPipe implements PipeTransform {

  public constructor(private _injector: Injector) {

  }

  public transform(data: any): Injector {
    return Injector.create({
       providers: [{ provide: 'data$', useValue: of(data) }],
       parent: this._injector
    });
  }

}
