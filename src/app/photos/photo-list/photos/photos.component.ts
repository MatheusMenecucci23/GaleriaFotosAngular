import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {
  @Input() photos: Photo[] = [];
  rows = []
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {//Este método recebe como parâmetro todas as possíveis mudanças das inbound properties do nosso componente
    if(changes.photos)//se ouve mudança em photos
        this.rows = this.groupColumns(this.photos);
}

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3) {
        newRows.push(photos.slice(index, index + 3));//na linha adicione uma parte que é especificada com o slice
    }
    return newRows;
  }
}
