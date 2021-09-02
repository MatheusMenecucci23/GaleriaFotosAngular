import { Injectable } from '@angular/core';
import { PhotoService } from './../photo/photo.service';
import { Photo } from './../photo/photo';
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{
  constructor(private service:PhotoService){}

  resolve(route: ActivatedRouteSnapshot){
    const userName = route.params.userName;
    return this.service.listFromUserPaginated(userName, 1);  }
}
