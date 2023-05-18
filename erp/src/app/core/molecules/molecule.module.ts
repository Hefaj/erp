import { ModuleWithProviders, NgModule, Type } from "@angular/core";
import { GroupRadioComponent } from "./group-radio/group-radio.component";
import { SidebarHeaderComponent } from "./sidebar-header/sidebar-header.component";
import { SidebarRadioComponent } from "./sidebar-radio/sidebar-radio.component";
import { SidebarButtonComponent } from "./sidebar-button/sidebar-button.component";
import { GroupPillComponent } from "./group-pill/group-pill.component";
import { SidebarPillComponent } from "./sidebar-pill/sidebar-pill.component";

const components: (any[] | Type<any> | ModuleWithProviders<{}>)[] | undefined = [
  SidebarRadioComponent,
  GroupRadioComponent,
  GroupPillComponent,
  SidebarHeaderComponent,
  SidebarButtonComponent,
  SidebarPillComponent,
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
export class MoleculeModule {}
