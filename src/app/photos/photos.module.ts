import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';

@NgModule({
    imports: [
      PhotoModule,
      PhotoFormModule,
      PhotoListModule
    ]
  })
export class PhotosModule {}
