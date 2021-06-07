import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@web/pages/home/home.component';
import { ProductComponent } from '@web/pages/product/product.component';
import { ProductsComponent } from '@web/pages/products/products.component';
import { ProfileComponent } from '@web/pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'produtos',
    component: ProductsComponent,
  },
  {
    path: 'produto/:id',
    component: ProductComponent,
  },
  {
    path: 'perfil',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
