import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HMenuComponent } from './h-menu/h-menu.component';
import { HGatewayComponent } from './h-gateway/h-gateway.component';

@NgModule({
  imports: [CommonModule, HMenuComponent, HGatewayComponent],
  exports: [HMenuComponent, HGatewayComponent]
})
export class SegmentModule {}
