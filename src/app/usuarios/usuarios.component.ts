import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from './../servicio.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
usuarios;
posts;
id;
  constructor(private servicioService: ServicioService, public activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.servicioService.getUsuarios().subscribe(
      res => {
        console.log(res);
        this.usuarios = res; },
        err => console.log(err)

    );

    this.servicioService.getPosts().subscribe(
      res => {
       // console.log(res);
        this.posts = res; },
        err => console.log(err)

    );
   }

   getUsuarios2(ide){
     this.id = ide;
     this.servicioService.getUsuarios().subscribe(
      res => {
        console.log(res);
        this.usuarios = res; },
        err => console.log(err)

    );
   }

  ngOnInit(): void {
  }

}
