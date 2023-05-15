import { Directive, Input } from '@angular/core';
import { map, Observable, of, share } from 'rxjs';
@Directive()
export abstract class BaseComponent<IConfig, IData = {}> {
  private _data$: Observable<IData>;
  private _config$: Observable<IConfig>;
  protected constructor(private _defaultConfig: IConfig, private _data?: Observable<IData>) {
    this._config$ = new Observable<IConfig>();
    this.config$ = of(_defaultConfig);
    this._data$ = this._data != undefined ? this._data : new Observable<IData>();
  }

  public get config$(): Observable<IConfig> {
    return this._config$;
  }

  public get data$(): Observable<IData> {
    return this._data$;
  }

  @Input() public set config$(config$: Observable<IConfig>) {
    this._config$ = config$.pipe(
      map((customConfig) => {return {...this._defaultConfig, ...customConfig};}),
      share()
    );
  }

  @Input() public set data$(data$: Observable<IData>) {
    this._data$ = data$;
  }
}
