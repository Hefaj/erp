import { Route } from '@angular/router';
import { ProductComponent } from '@page/product';

export const remoteRoutes: Route[] = [
  { path: 'product', loadComponent: () => ProductComponent  },
];
