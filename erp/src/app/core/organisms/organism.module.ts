import { ModuleWithProviders, NgModule, Type } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MoleculeModule } from "../molecules/molecule.module";

const components: (any[] | Type<any> | ModuleWithProviders<{}>)[] | undefined = [
  MoleculeModule,
  SidebarComponent
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
export class OrganismModule {}
