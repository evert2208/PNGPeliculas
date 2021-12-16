import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, delay} from 'rxjs/operators';
import { PeliculaModel } from '../models/pelicula.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  private url='https://royal-films-2bfa5-default-rtdb.firebaseio.com';
  constructor( private http: HttpClient) { }

  crearPelicula(pelicula: PeliculaModel){
    return this.http.post(`${this.url}/peliculas.json`,pelicula)
            .pipe(map((resp: any)=>{
              pelicula.id= resp.name;
              return pelicula;
            }
            ));
  }

  actPelicula(pelicula: PeliculaModel){
      const pelTemp ={
        ...pelicula
      };
      delete pelTemp.id;
      return this.http.put(`${this.url}/peliculas/${pelicula.id}.json`,pelTemp);
    }

  getPelicula(id: string){
    return this.http.get(`${this.url}/peliculas/${id}.json`);
  }

  borrarPelicula(id: string){
    return this.http.delete(`${this.url}/peliculas/${id}.json`);
  }

  getPeliculas(){
    return this.http.get(`${this.url}/peliculas.json`)
    .pipe(map( this.crearArreglo),
    delay(0)
    );
  }

  private crearArreglo(peliculaObj: object | any){
    const peliculas: PeliculaModel[]=[];

    Object.keys(peliculaObj).forEach(key => {
      const pelicula: PeliculaModel = peliculaObj[key];
      pelicula.id=key;
      peliculas.push(pelicula);
    });
    if(peliculaObj===null){return[];};

    return peliculas;
  }


}
