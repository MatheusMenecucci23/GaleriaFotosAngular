import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class loginGuard implements CanActivate {//guardando rota, criando uma proteção de rota


  constructor(private userService: UserService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.userService.isLogged()){//se você estiver logado, você será jogado para rota que exibe as fotos
        this.router.navigate(['user', this.userService.getUserName()])
        return false;
    }
      return true;
  }
}
