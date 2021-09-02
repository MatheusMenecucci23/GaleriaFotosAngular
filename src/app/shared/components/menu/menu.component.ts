import {Component} from "@angular/core"

@Component({
    selector: 'ap-menu',
    templateUrl: './menu.component.html',
    styleUrls:["./menu.component.css"]

})
export class MenuComponent {//criando propriedade para ver se o menu está aparecendo ou não

    isShown = false;

    toggle() {//alterando a variável isShown
        this.isShown = !this.isShown;
    }
}
