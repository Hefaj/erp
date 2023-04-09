import { Routes } from "@angular/router";
import { BrandComponent } from "../pages/brand/brand.component";
import { ProductComponent } from "../pages/product/product.component";

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    loadChildren: () => import('../pages/product/product.module').then(module => module.ProductModule),
  },  
  {
      path: 'product',
      component: ProductComponent,
      loadChildren: () => import('../pages/product/product.module').then(module => module.ProductModule),
    },
    {
      path: 'brand',
      component: BrandComponent,
      loadChildren: () => import('../pages/brand/brand.module').then(module => module.BrandModule)
    },
];