import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription'})//O @Pipe indica que ese arquivo é um pipe
export class FilterByDescription implements PipeTransform {//implements (interface do angular), com essa interface o ANGULAR nos ajudará nos erros

    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();//removendo os espaços da palavra digitada com o .trim() e transformando tudo em caixa baixa com .toLowerCase

        if(descriptionQuery) {
            return photos.filter(photo =>
                photo.description.toLowerCase().includes(descriptionQuery)//converte a photo.description para caixa baixa e inclue o descriptionQuery nela
            );
        } else {
            return photos;
        }
    }
}
