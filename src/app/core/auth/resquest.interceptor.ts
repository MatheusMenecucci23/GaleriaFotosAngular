import { TokenService } from './../token/token.service';
import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpSentEvent } from "@angular/common/http";
import { HttpHeaderResponse } from "@angular/common/http";
import { HttpProgressEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { HttpUserEvent } from "@angular/common/http";
@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

            if(this.tokenService.hasToken()) {//se tiver token
                const token = this.tokenService.getToken();//pegue o token
                req = req.clone({//clona a requisição e
                    setHeaders : {//coloca no cabeçalho o x-access-token com token
                        'x-access-token': token
                    }
                });
            }
        return next.handle(req);

    }
}
