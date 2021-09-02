import { AppRoutingModule } from './app.routing.module';
import { PhotosModule } from './photos/photos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';



@NgModule({//todos os componentes precisam ser importados aqui
  declarations: [
    AppComponent,
  ],
  imports: [//todos os módulos precisam ser importados aqui
    BrowserModule,//as diretivas são carregadas pelo BrowserModule
    PhotosModule,
    AppRoutingModule,
    ErrorsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
