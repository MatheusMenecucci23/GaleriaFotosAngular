import { SearchComponent } from './search/search.component';
import { CardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { DarkenOnHoverModule } from 'src/app/shared/directive/dark-on-hover/darken-on-hover.module';



@NgModule({
  imports: [
    CommonModule,//importa as diretivas como NgFor
    PhotoModule,
    CardModule,
    DarkenOnHoverModule
     ],
  declarations: [PhotoListComponent,PhotosComponent, LoadButtonComponent, FilterByDescription, SearchComponent ]
})
export class PhotoListModule { }
