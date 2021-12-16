import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string): string {
    if (poster) {
      return `../../assets/images/${poster}`;
    }else {
      return '../../assets/images/no-image.jpg';
    };


  }
}

