import { Response } from '@angular/http';
import { UserService } from './services/user.service';
import {CompanyService} from './services/company.service'
import User from './models/user.model';
import Company from './models/company.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import {CompanyComponent} from './components/company_component/company.component'

@Component({
  // selector: 'app-user-login',
  templateUrl: './superuser.component.html'
  // styleUrls: ['./app.component.scss']
})
export class SuperUserComponent implements OnInit {

  constructor(
    // Private todoservice will be injected into the component by Angular Dependency Injector
    private userService: UserService,    
    private companyService: CompanyService,
    private router: Router,
    private companyComponent:CompanyComponent

  ) { }

  companyList: Company[];

  

  

  public newUser: User = new User();
  

  ngOnInit(): void {// At component initialization the
    this.companyService.getCompanies()
    .subscribe(companies => {
      // assign the todolist property to the proper http response
      this.companyList = companies;        
    });}

  
  createCompanyProfile() {    
    //this.companyComponent.isView = false;
    this.userService.login(this.newUser)
    .subscribe((res) => {  
          
      this.router.navigate(['createcp']);   

    });   

  } 

  viewCompanyProfile(companylist) {    
    console.log('Inside super component')
    console.log(companylist)
    //this.companyComponent.isView = true;
    this.companyComponent.viewCompanyProfile()
  }
  

}

