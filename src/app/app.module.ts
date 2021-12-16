import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarteleraComponent } from './pages/cartelera/cartelera.component';
import { CreacionComponent } from './pages/creacion/creacion.component';
import { PosterPipe } from './pipes/poster.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarteleraComponent,
    CreacionComponent,
    PosterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
