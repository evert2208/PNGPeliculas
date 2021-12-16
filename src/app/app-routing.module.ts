import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteleraComponent } from './pages/cartelera/cartelera.component';
import { CreacionComponent } from './pages/creacion/creacion.component';

const routes: Routes = [
  {path: 'cartelera', component: CarteleraComponent},
  {path: 'creacion/:id', component: CreacionComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'cartelera'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
