import { ModuleWithProviders, NgModule, Type } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MoleculeModule } from "../molecules/molecule.module";
import { SidebarFilterComponent } from "./sidebar-filter/sidebar-filter.component";
import { GridComponent } from "./grid/grid.component";

const components: (any[] | Type<any> | ModuleWithProviders<{}>)[] | undefined = [
  MoleculeModule,
  SidebarComponent,
  SidebarFilterComponent,
  GridComponent,
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
