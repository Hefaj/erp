import { ModuleWithProviders, NgModule, Type } from "@angular/core";
import { LabelComponent } from "./label/label.component";
import { ButtonComponent } from "./button/button.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { IconComponent } from "./icon/icon.component";
import { PillComponent } from "./pill/pill.component";
import { SwitchComponent } from "./switch/switch.component";

const components: (any[] | Type<any> | ModuleWithProviders<{}>)[] | undefined = [
  ButtonComponent,
  CheckboxComponent,
  IconComponent,
  LabelComponent,
  PillComponent,
  SwitchComponent,
];

@NgModule({
  declarations: [
  ],
  imports: [
    components
  ],
  exports: [
    components
  ]
})
export class AtomModule {}
