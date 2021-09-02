import { Component } from '@angular/core';

@Component({//decorator component é o que torna a classe AppComponent um component
  selector: 'app-root',//esse selector permite chamar o componente em templates. Assim no index.html eu consigo chamar esse component com <app-root></app-root>
  templateUrl: './app.component.html',//indica a apresentação do component, que é o que vemos no browser.
  styleUrls: ['./app.component.css']//indicando o css que será utilizado
})
export class AppComponent {//essa classe só é um componente por causa do @Component.

}
