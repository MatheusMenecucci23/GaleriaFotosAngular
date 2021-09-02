import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';
import * as jtw_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {//essa class sabe dizer se o cara está logado ou não

  private userSubject = new BehaviorSubject<User>(null);//passando a interface que está criada user.ts, com BehaviorSubject o nome so suuário fica salvo para header
  private userName: string;


  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
   }
  setToken(token: string){//quando eu efetuo o meu login, mostre o token
    this.tokenService.setToken(token)
    this.decodeAndNotify();

  }
  getUser(){
      return this.userSubject.asObservable();
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();//pego o token
    const user = jtw_decode(token) as User;//decodifico o token e tranformo pro tipo user com AS
    this.userName = user.name;
    this.userSubject.next(user);//emitindo o token
  }

  logout(){//criando o logout
    this.tokenService.removeToken()//removendo o token
    this.userSubject.next(null);
  }

  isLogged(){
    return this.tokenService.hasToken();
  }
  getUserName(){
    return this.userName;
  }
}
