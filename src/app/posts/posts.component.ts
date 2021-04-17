import { ServicioService } from './../servicio.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;
  usuarios;

  constructor(private servicioService: ServicioService, public activateRoute: ActivatedRoute) {
    this.servicioService.getPosts().subscribe(
      res => {
      //  console.log(res);
        this.posts = res; },
        err => console.log(err)

    );
    this.servicioService.getUsuarios().subscribe(
      res => {
       // console.log(res);
        this.usuarios = res;
      },
      err => console.log(err)
    );


   }

  ngOnInit(): void {
  }




}
