import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicioService } from './../servicio.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
comentarios;
posts;
id: string;
  constructor(public servicioService: ServicioService, public activatedRoute: ActivatedRoute) {

    this.id = this.activatedRoute.snapshot.params.id;
    this.servicioService.getComentarios(this.id).subscribe(
      res => {
        // console.log(res);
        this.comentarios = res; },
        err => console.log(err)
    );

    this.servicioService.getPosts().subscribe(
      res => {
       // console.log(res);
        this.posts = res; },
        err => console.log(err)

    );

   }

  ngOnInit(): void {
  }

}
