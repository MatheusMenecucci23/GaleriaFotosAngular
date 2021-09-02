import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule//importa as requisições http
  ],
  declarations: [PhotoComponent],
  exports:[PhotoComponent ]
})
export class PhotoModule { }
