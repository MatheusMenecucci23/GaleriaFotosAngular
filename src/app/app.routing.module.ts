
import { AuthGuard } from './core/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [//definindo caminhos
    {
      path: '',
      pathMatch: 'full',// esse atributo faz com que o caminho seja exatemente o declarado no path
      redirectTo: 'home'
    },
    {
      path: "home",
      loadChildren:"./home/home.module#HomeModule"
    },
    {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    },
    {
        path: 'p/add',
        component: PhotoFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,{useHash:true})
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

