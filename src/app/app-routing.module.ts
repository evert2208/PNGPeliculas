import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteleraComponent } from './pages/cartelera/cartelera.component';
import { CreacionComponent } from './pages/creacion/creacion.component';

const routes: Routes = [
  {path: 'cartelera', component: CarteleraComponent},
  {path: 'creacion', component: CreacionComponent},
  {path: '**', redirectTo: 'cartelera'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
