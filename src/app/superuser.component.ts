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
  public companyName: String;
  public loggedInUser: String = localStorage.getItem("loggedinuserid");  

  ngOnInit(): void {// At component initialization the
    this.companyService.getCompanies()
    .subscribe(companies => {
      // assign the todolist property to the proper http response
      this.companyList = companies;        
    });}

  public isView:Boolean = true;
    

  create() {    
      //CompanyComponent.isView = false;

    let cmpName = this.companyName
    let cmpid:Number = 0;

    console.log(this.newUser.cmpid)
    console.log(this.companyName)

      this.companyList.forEach( function (value) {
          if(value.name == cmpName){
            cmpid = value.cmpid;
          }
      })

      console.log(cmpid)
      

      console.log("Inside super component user")
      this.newUser.role = 'superuser';
      this.newUser.createdbyid = parseInt(localStorage.getItem("loggedinuserid"));
      this.newUser.cmpid = cmpid;
      this.userService.create(this.newUser)
      .subscribe((res) => {
        console.log("Inside super component user service response")
      });
  
    }
  

  viewCompanyProfile(companylist) {    
    console.log('Inside super component')
    console.log(companylist)
    //this.companyComponent.isView = true;
    this.companyComponent.viewCompanyProfile()
  }
  

}

