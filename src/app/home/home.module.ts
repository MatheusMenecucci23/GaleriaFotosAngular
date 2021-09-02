
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignUpComponent } from './signUp/signUp.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signUp/signup.service';


@NgModule({
  declarations: [ SigninComponent, SignUpComponent,
    HomeComponent ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      VMessageModule,
      RouterModule,
      HomeRoutingModule
  ],
  providers: [SignUpService]
})
export class HomeModule {

 }
