import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;


  constructor(private userService: UserService, private router: Router) {
    this.user$ = userService.getUser();

   }

  ngOnInit() {
  }

  logout1(){//aplicando o logout e redirecionando para a página principal
    this.userService.logout();
    this.router.navigate([""]);

  }

}
