import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';

const routes: Routes = [
    {
        path: '',//caminho da url do navegador for vazia
        pathMatch: 'full',
        redirectTo: 'home'//redirecione para home
    },
    {
        path: 'home',//home
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'user/:userName', //caminho exibido na url do navedor
        pathMatch: 'full',
        component: PhotoListComponent,//component que será exibido
        resolve: {
            photos: PhotoListResolver
        },
        data:{
          title: "Timeline"
        }
    },
    {
        path: 'p/add',
        component: PhotoFormComponent,
        canActivate: [AuthGuard],
        data: {
          title: "Photo Upload"
        }
    },
    {
        path: 'p/:photoId', //caminho exibido na url do navedor
        component: PhotoDetailsComponent, //component que será exibido
        data:{
          title:'Photo detail'
        }
    },
    {
      path: 'error',
      component: GlobalErrorComponent,
      data: {
        title: 'Not found'
      }
    },
    {
      path: 'not-found',//se o caminho especificado naõ existir
      component: NotFoundComponent,
      data: {
        title: 'Not found'
      }
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true } )
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

