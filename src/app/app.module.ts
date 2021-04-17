import { ServicioService } from './servicio.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    UsuariosComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
