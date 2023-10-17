import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MenuIntermedioComponent } from './menu-intermedio/menu-intermedio.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    FooterComponent,
    MenuIntermedioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }
