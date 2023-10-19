import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { distribucion_rutas } from './pages/routes/distribucion-completa.routes';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: '', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
  { path: '', component: HomeComponent, children: distribucion_rutas },

    // { path: '', component: NavComponent },
    // { path: '', component: FooterComponent},
 // { path: '**', pathMatch: 'full', redirectTo: 'home' }
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
