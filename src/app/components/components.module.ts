import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from '@web/components/menu/menu.component';
import { ProductCardComponent } from '@web/components/product-card/product-card.component';
import { HeaderComponent } from '@web/components/header/header.component';
import { ChartComponent } from '@web/components/chart/chart.component';

@NgModule({
  declarations: [
    MenuComponent,
    ProductCardComponent,
    HeaderComponent,
    ChartComponent,
  ],
  exports: [MenuComponent, ProductCardComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
