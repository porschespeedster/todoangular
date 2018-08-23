import { Response } from '@angular/http';
import { UserService } from './services/user.service';
import User from './models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-user-login',
  templateUrl: './createpo.component.html'
  // styleUrls: ['./app.component.scss']
})
export class ProductOwnerComponent implements OnInit {

  constructor(
    // Private todoservice will be injected into the component by Angular Dependency Injector
    private userService: UserService,
    private router: Router
  ) { }

  public newUser: User = new User();
  ngOnInit(): void {}

  
  

}

