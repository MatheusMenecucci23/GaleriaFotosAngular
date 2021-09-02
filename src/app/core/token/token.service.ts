import { Injectable } from '@angular/core';

const key = "authToken"

@Injectable({
  providedIn: 'root'
})
export class TokenService {

    hasToken(){//se o token existe, retorne true ou false, o !! convertendo o valor em boolean
      return !!this.getToken();
    }
    setToken(token){
      window.localStorage.setItem(key, token);//armazenando o token
    }
    getToken(){//pega o token
      return  window.localStorage.getItem(key);
    }
    removeToken(){//remove o token
      window.localStorage.removeItem(key);
    }
constructor() { }

}
