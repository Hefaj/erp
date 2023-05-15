import { Observable, of } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asObservable'
})
export class AsObservablePipe implements PipeTransform {

  public transform<T>(value: T): Observable<T> {
    return of(value);
  }

}
