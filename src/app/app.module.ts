import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarteleraComponent } from './pages/cartelera/cartelera.component';
import { CreacionComponent } from './pages/creacion/creacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarteleraComponent,
    CreacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
