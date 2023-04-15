import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { ProductSectionAction1Component } from 'src/app/pages/product/sections/actions/product-section-action-1/product-section-action-1.component';

@Component({
  standalone: true,
  selector: 'app-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss'],
  imports: [MaterialModule, CommonModule]
})
export class SidebarContainerComponent implements AfterViewInit, OnDestroy {

  @ViewChild('targer', { read: ElementRef }) public elementRef!: ElementRef;

  private _sub: Subscription;
  public constructor(private _overlay: Overlay) {
    this._sub = new Subscription();
  }

  public ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  public ngAfterViewInit(): void {
    const positionStrategy = this._overlay.position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'top'
        }
      ])
      .withLockedPosition(true)
      .withFlexibleDimensions(false)
      .withPush(false)
      .withViewportMargin(0);

    const overlayRef = this._overlay.create({
      hasBackdrop: true,
      positionStrategy: positionStrategy,
    });

    const userProfilePortal = new ComponentPortal(ProductSectionAction1Component);
    overlayRef.attach(userProfilePortal);
    this._sub.add(overlayRef.backdropClick().subscribe(() => overlayRef.detach()));
  }
}
