import { NgxsModule } from '@ngxs/store';
import { NgModule } from "@angular/core";
import { BrandState } from './state/brand.state';

@NgModule({
  declarations: [
  ],
  imports: [
    NgxsModule.forFeature([BrandState]),
  ]
})
export class BrandModule {}