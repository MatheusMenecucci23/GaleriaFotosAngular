import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { loginGuard } from '../core/auth/login.guard';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './signUp/signUp.component';

const routes: Routes = [//definindo caminhos que serão carregados só pra quando a home for carregada
  {
    //carrega o homeComponent primeiro junto com o SiginComponent,
    //depois se acessarem o signup, carregue o homeComponent junto com o  SignUpComponent
    path: '',
    component: HomeComponent,
    canActivate: [loginGuard],
    children: [// a rota filha faz com que ele carregue o componente na mesma página do pai
        {
            path: '',
            component: SigninComponent,
        },
        {
            path: 'signup',
            component: SignUpComponent,
        },
    ]
  }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }

