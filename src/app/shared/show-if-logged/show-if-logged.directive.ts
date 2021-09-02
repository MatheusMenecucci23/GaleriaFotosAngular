import { element } from 'protractor';
import { Directive, ElementRef, OnInit, Renderer } from "@angular/core";
import { Input } from "@angular/core";
import { UserService } from 'src/app/core/user/user.service';

@Directive({
    selector :'[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit{//exibindo o elemento se usuário está logado ou não

  currentDisplay: string;

  constructor(
      private element: ElementRef<any>,
      private renderer: Renderer,
      private userService: UserService
    ) {}
    ngOnInit(): void {//resolvendo a questão do menu

      this.currentDisplay = getComputedStyle(this.element.nativeElement).display;//pegando o display atual
      this.userService.getUser().subscribe(user => {
        if(user){// se eu efetuei login
          this.renderer.setElementStyle(this.element.nativeElement,'display', this.currentDisplay)//tornando o "upload" do menu visível
        } else{//se eu fiz logout
          this.currentDisplay = getComputedStyle(this.element.nativeElement).display;//pegando o dislpay atual
          this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');//pegar o display atual e colocar um none
        }
      })
    }
}
