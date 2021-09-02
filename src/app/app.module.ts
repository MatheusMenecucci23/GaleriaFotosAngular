import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';

//primeiro módulo a ser carregado, logo quando carregado, ele chama todos outros módulos!
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [//aqui só entra módulo
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    CoreModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
