import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  URI: string;
  URI2: string;
  URI3: string;
  key: string;


  constructor(private http: HttpClient) {
this.URI = `https://jsonplaceholder.typicode.com/posts`;
this.URI2 = `https://jsonplaceholder.typicode.com/posts/`;
this.URI3 = `https://jsonplaceholder.typicode.com/users`;
this.key = `/comments`;


   }

   getPosts(){
     return this.http.get(`${this.URI}`);
   }

   getUsuarios(){
     return this.http.get(`${this.URI3}`);
   }

   getComentarios(id){
     return this.http.get(`${this.URI2}${id}${this.key}`);
   }
}
