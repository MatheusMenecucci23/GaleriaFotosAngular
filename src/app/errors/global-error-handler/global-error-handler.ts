import { UserService } from 'src/app/core/user/user.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import * as StackTrace from "stacktrace-js";
import { ServerLogService } from './server-log.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';



@Injectable()

export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector){

  }


    handleError(error: any): void {//criando um error global e padronizado


      const location = this.injector.get(LocationStrategy);
      const userService = this.injector.get(UserService);//injetando serviço
      const serverLogService = this.injector.get(ServerLogService);
      const router = this.injector.get(Router);
        const url = location instanceof PathLocationStrategy
            ? location.path()
            : '';


        //o error é uma instancia de erro? se sim, então eu pego a mensagem de erro
        //se não pego o erro e transformo em string
        const message = error.message ? error.message: error.toString();

        if(environment.production) router.navigate(['/error']);


        StackTrace
        .fromError(error)
        .then(stackFrames => {
            const stackAsString = stackFrames
              .map(sf => sf.toString())
              .join("\n");

            console.log(message)
            console.log(stackAsString);//erro padrão
            console.log("Isso será enviado para o servidor: ")

            serverLogService.log({ message, url, userName: userService.getUserName(), stack: stackAsString})
            .subscribe(
              () => console.log('Error logged on server'),//se deu certo
              err => {//se deu errado
                  console.log(err);
                  console.log('Fail to send error log to server');
              }
          );//vou mandar isso pro backend
        })
    }
}
