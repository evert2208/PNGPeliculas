import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PeliculaModel } from '../../models/pelicula.model';
import { ServiceService } from '../../services/service.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent implements OnInit {

  pelicula: PeliculaModel= new PeliculaModel();

  constructor(private peliculaService: ServiceService,
              private route: ActivatedRoute,
              private storageService: StorageService) { }

  ngOnInit(): void {
    const id: string | any = this.route.snapshot.paramMap.get('id');
    if(id !== 'nuevo'){
      this.peliculaService.getPelicula(id)
      .subscribe((resp: PeliculaModel| any) => {
        this.pelicula=resp;
        this.pelicula.id=id;
      })
    }
  }

  guardar(form: NgForm){
    if(form.invalid){
      console.log('formulario invalido');
      Swal.fire({
        title: 'incompleto',
        icon: 'error',
        text: 'por favor llene el formulario completo',
        allowOutsideClick: false
      });
      return;
    }
    Swal.fire({
      title: 'espere',
      icon: 'info',
      text: 'guardando info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if(this.pelicula.id) {
      peticion=this.peliculaService.actPelicula(this.pelicula);
    }else{
      peticion=this.peliculaService.crearPelicula(this.pelicula);
    }

    peticion.subscribe(resp=>{
      Swal.fire({
        title: this.pelicula.nombre,
        text: 'se actualizo correctamente',
        icon: 'success'

      });
    });
  }

  imagenes: any=[];
  cargarImagen(event: any){
    let archivos = event.target.files;
    let reader= new FileReader();
    let nombre= this.pelicula.nombre;

    reader.readAsDataURL(archivos[0]);
    reader.onloadend=()=>{
      console.log(reader.result);
      this.imagenes.push(reader.result);
      this.storageService.subirImagen(nombre+"_"+Date.now(), reader.result)
          .then(urlImage =>{
            this.pelicula.poster=urlImage;
            console.log(urlImage);
          })
    }



  }
}
