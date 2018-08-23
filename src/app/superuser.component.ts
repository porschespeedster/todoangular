import { Response } from '@angular/http';
import { UserService } from './services/user.service';
import User from './models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-user-login',
  templateUrl: './superuser.component.html'
  // styleUrls: ['./app.component.scss']
})
export class SuperUserComponent implements OnInit {

  constructor(
    // Private todoservice will be injected into the component by Angular Dependency Injector
    private userService: UserService,
    private router: Router
  ) { }

  public newUser: User = new User();
  ngOnInit(): void {}

  createProductOwner() {
    this.userService.login(this.newUser)
    .subscribe((res) => {  
          
        this.router.navigate(['createpo']);

    });

  }

  createApplicationUser() {
    this.userService.login(this.newUser)
    .subscribe((res) => {
      
      this.router.navigate(['createau']);

    });

  }
  

}

