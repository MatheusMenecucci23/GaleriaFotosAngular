import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private titleService: Title){

  }
  ngOnInit(): void {
    this.router.events//me inscrevendo no evento de rotas
    .pipe(filter(event => event instanceof NavigationEnd))//se esse evento de rotas for do NavigationEnd
    .pipe(map(() => this.ActivatedRoute))//pegando a rota atual
    .pipe(map(route=>{
      while(route.firstChild) route = route.firstChild;
      return route

    }))
    .pipe(switchMap(route=>route.data))//pegando o data -contém o título- das rotas
    .subscribe(event => this.titleService.setTitle(event.title))//alterando o título da página
  }

 }
