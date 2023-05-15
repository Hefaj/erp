import { ModuleWithProviders, NgModule, Type } from "@angular/core";
import { DesktopComponent } from "./desktop/desktop.component";
import { OrganismModule } from "../organisms/organism.module";

const components: (any[] | Type<any> | ModuleWithProviders<{}>)[] | undefined = [
  OrganismModule,
  DesktopComponent,
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
export class TemplateModule {}
