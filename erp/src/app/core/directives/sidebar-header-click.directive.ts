import { AfterViewInit, Directive, ElementRef, Input, ViewContainerRef, OnInit, ComponentRef } from '@angular/core';
import { SidebarService } from '../organisms/sidebar/sidebar.service';
import { SidebarHeaderComponent } from '../molecules/sidebar-header/sidebar-header.component';

@Directive({
  selector: '[appSidebarHeaderClick]',
  standalone: true
})
export class SidebarHeaderClickDirective implements OnInit, AfterViewInit  {
  @Input('appSidebarHeaderClick') sidebarService!: SidebarService;

  private _componentRef!: ComponentRef<SidebarHeaderComponent>;

  public constructor(private el: ElementRef, private _viewContainerRef: ViewContainerRef) {
  }

  public ngOnInit(): void {
    this._componentRef = this._viewContainerRef.createComponent(SidebarHeaderComponent);
  }

  public ngAfterViewInit(): void {
    const items: HTMLElement[] = Array.from(this.el.nativeElement.children);
    const headerClassName = (this._componentRef.location.nativeElement.children[0].classList as DOMTokenList);

    for (let item of items) {

      if (((item.getElementsByClassName(headerClassName.value)?.length) ?? 0) > 0) {
        const button = item.getElementsByTagName('button')[0]; // do zmiany na cos bardziej dynamicznego

        if (!button) return;

        button.addEventListener('click', () => {
          this.sidebarService.clickPlus(items.findIndex(x => x === item));
        });
      }
    }

    this._componentRef.destroy();
  }
}
