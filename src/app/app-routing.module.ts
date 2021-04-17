import { ComentariosComponent } from './comentarios/comentarios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import {UsuariosComponent} from './usuarios/usuarios.component';



const routes: Routes = [
{ path: 'posts' , component: PostsComponent},
{ path: 'usuarios' , component: UsuariosComponent},
{ path: 'usuarios/:id' , component: UsuariosComponent},
{ path: 'comentarios/:id' , component: ComentariosComponent},
{ path: '**', pathMatch: 'full', redirectTo: 'posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
