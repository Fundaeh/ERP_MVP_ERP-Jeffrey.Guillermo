import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MenuIntermedioComponent } from './menu-intermedio/menu-intermedio.component';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    MenuIntermedioComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    NavComponent,
    FooterComponent,
    MenuIntermedioComponent,
  ],
})
export class PagesModule {}
