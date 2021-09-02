import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RequestInterceptor } from './auth/resquest.interceptor';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],//só é exportado o que será usado em template de outro component
  imports: [CommonModule,
  RouterModule,
],
providers:[
  {
    provide:HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true,

  }
]
})
export class CoreModule { }
