import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validators';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  providers:[UserNotTakenValidatorService]//quando chamarem esse component, ele proverá o UserNot....
})
export class SignUpComponent implements OnInit {

  singupForm: FormGroup;//me dá o controlForm, utilizado no signup.html
  @ViewChild("EmailInput") EmailInput: ElementRef<HTMLInputElement>//pegando os campos que estão com #EmailInput

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) { }

  ngOnInit() {
    //Preparando as validações

    this.singupForm = this.formBuilder.group({//o
      email:["",
        [
          Validators.required,
          Validators.email//validando o email
        ]
      ],
      userName:["",
        [
          Validators.required,
          lowerCaseValidator,//expressão que obriga o campo a começar com letra minúscula e pode ter número no final
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      fullName:["",
        [
          Validators.required,
          Validators.minLength(2),//validando o tamanho minimo
          Validators.maxLength(40)//validando o tamanho máximo
        ]
      ],
      password: ["",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]

    });
    this.platformDetectorService.isPlatformBrowser() && this.EmailInput.nativeElement.focus();//dando o foco para um campo

  }

  signup(){
    const newUser = this.singupForm.getRawValue() as NewUser;//com o .getRawValue o angular devolve os valores dos campos do formulário
    this.signUpService.sigunp(newUser).subscribe(()=>this.router.navigate([""]),//se eu conseguir registrar, navegue até o path ""
    err=>console.log(err))//se der erro exiba no console
  }

}
