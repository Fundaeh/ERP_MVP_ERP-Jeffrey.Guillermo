import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './pages/nav/nav.component';
import { FooterComponent } from './pages/footer/footer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
  { path: '', component: NavComponent },
  { path: '', component: FooterComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
