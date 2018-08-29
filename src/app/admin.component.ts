import { Response } from '@angular/http';
import { UserService } from './services/user.service';
import User from './models/user.model';
import Company from './models/company.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CompanyComponent} from './components/company_component/company.component'
import {CompanyService} from './services/company.service'

@Component({
  // selector: 'app-user-login',
  templateUrl: './admin.component.html'
  // styleUrls: ['./app.component.scss']
})
export class Administrator implements OnInit {

  constructor(
    // Private todoservice will be injected into the component by Angular Dependency Injector
    private userService: UserService,
    private companyService: CompanyService,
    private router: Router
  ) { }

  companyList: Company[];

  public newUser: User = new User();
  ngOnInit(): void {
    this.companyService.getCompanies()
    .subscribe(companies => {
      // assign the todolist property to the proper http response
      this.companyList = companies;        
    });}

    createCompanyProfile() {                
      this.router.navigate(['createcp']);            
    } 

    createSuperUser(){      
      localStorage.setItem("createsuperuser","1");
      this.router.navigate(['super']);
    }

}

