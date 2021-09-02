import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

const routes: Routes = [//caminhos indicados no navegador
  { path: 'user/:userName', component: PhotoListComponent, resolve:{photos: PhotoListResolver}},
  { path: 'p/add', component: PhotoFormComponent },
  { path: '**', component: NotFoundComponent }//quando o caminho for invalido, redirecione para p PhotoListComponent
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
