import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;// esse Formgroup é do reactiveForms, ele controla o form do siginin.component
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;//vai no #userNameInput la no signin.component.ts e pega o campo e injeta nessa variável

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService){ }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],//colocando o campo obrigatório
        password: ['', Validators.required]//controla a parte referenciada no formControlName em signin.component.html

    });
    this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();//dando o foco para um campo



  }
  login(){
    const userName = this.loginForm.get("userName").value;//pegue o valor do userName
    const password = this.loginForm.get("password").value;

    //passando o userName e o password para authenticate no authService.ts
    this.authService.authenticate(userName,password).subscribe(
      ()=> this.router.navigateByUrl("user/"+userName), //se o usuário está correto, redirecione para essa url
      err=>{console.log(err);
            this.loginForm.reset();
            this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();//dando o foco para um campo
            alert(" Invalid user name or password ");})//se o usuário estiver incorreto,

  }

}
