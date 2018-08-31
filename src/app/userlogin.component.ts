import { Response } from '@angular/http';
import { UserService } from './services/user.service';
import User from './models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-user-login',
  templateUrl: './login.component.html'
  // styleUrls: ['./app.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
    // Private todoservice will be injected into the component by Angular Dependency Injector
    private userService: UserService,
    private router: Router
  ) { }

  public newUser: User = new User();
  ngOnInit(): void {}


  login() {
    this.userService.login(this.newUser)
    .subscribe((res) => {

        var username = res.data[0].username;
          
        console.log(res.data[0].role)
        localStorage.setItem("loggedinuserid",res.data[0].uid);
        localStorage.setItem("loggedinusercmpid",res.data[0].cmpid);

        if(res.data[0].role == 'super' || res.data[0].role == 'superuser'){
          this.router.navigate(['super']);
        }else if(res.data[0].role == 'cmmadmin'){          
          this.router.navigate(['cmmadmin']);  
        }else{
          this.router.navigate(['home']);
        }


    });

  }

}

