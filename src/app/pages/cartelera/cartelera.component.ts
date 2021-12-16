import { Component, OnInit, Input } from '@angular/core';
import { PeliculaModel } from '../../models/pelicula.model';
import { ServiceService } from '../../services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  @Input() movies: PeliculaModel[] | undefined;

   info: PeliculaModel[]=[];
    cargando=false;
  constructor(private peliculaService: ServiceService) { }

  ngOnInit(): void {
    this.cargando=true;
    this.peliculaService.getPeliculas().subscribe(resp => {
      this.info=resp;
      this.cargando=false;
    });
  }

  borrarPelicula(pelicula: PeliculaModel|any, i: number){
    Swal.fire({
      title: '¿esta seguro?',
      text: 'desea borrar esta Pelicula?',
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    }).then(resp =>{
      if(resp.value){
        this.info.splice(i,1);
    this.peliculaService.borrarPelicula(pelicula.id).subscribe();

      }
    });

  }

  clasificacion(){

  }
}
