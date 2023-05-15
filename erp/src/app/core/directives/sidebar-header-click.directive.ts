import { AfterViewInit, Directive, ElementRef, Input, ViewContainerRef, OnInit } from '@angular/core';
import { SidebarService } from '../organisms/sidebar/sidebar.service';
import { SidebarHeaderComponent } from '../molecules/sidebar-header/sidebar-header.component';

@Directive({
  selector: '[appSidebarHeaderClick]',
  standalone: true
})
export class SidebarHeaderClickDirective implements OnInit, AfterViewInit  {
  @Input('appSidebarHeaderClick') sidebarService!: SidebarService;

  private headerClassName!: DOMTokenList;

  public constructor(private el: ElementRef, private _viewContainerRef: ViewContainerRef) {
  }

  public ngOnInit(): void {
    const componentRef = this._viewContainerRef.createComponent(SidebarHeaderComponent);
    this.headerClassName = (componentRef.location.nativeElement.children[0].classList as DOMTokenList);
  }

  public ngAfterViewInit(): void {
    const items: HTMLElement[] = Array.from(this.el.nativeElement.children);

    for (let item of items) {

      if (((item.getElementsByClassName(this.headerClassName.value)?.length) ?? 0) > 0) {

        const button = item.getElementsByTagName('button')[0]; // do zmiany na cos bardziej dynamicznego

        if (!button) return;

        button.addEventListener('click', () => {
          this.sidebarService.clickPlus(items.findIndex(x => x === item));
        });
      }
    }
  }
}
