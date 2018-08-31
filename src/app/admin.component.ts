import { Response } from '@angular/http';
import { UserService } from './services/user.service';
import User from './models/user.model';
import Company from './models/company.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CompanyComponent} from './components/company_component/company.component'
import {CompanyService} from './services/company.service'
import { bloomFindPossibleInjector } from '@angular/core/src/render3/di';

@Component({
  // selector: 'app-user-login',
   templateUrl: './admin.component.html'
  // styleUrls: ['./app.component.scss']
})
export class Administrator implements OnInit {
  
  show : boolean = true;

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


  ngOnInit(): void {
    this.companyService.getCompanies()
    .subscribe(companies => {
      // assign the todolist property to the proper http response     

      this.companyList = companies;          

    });}

    toCompanyProfile() {                
      localStorage.setItem("createCompanyProfile","true")
      this.router.navigate(['createcp']);            
    } 

    viewCompanyProfile(companylist) {    
      console.log('Inside super component')
      console.log(companylist)
      localStorage.setItem("isCompanyView","true")
      //this.companyComponent.isView = true;
      this.companyComponent.viewCompanyProfile()
    }

    toSuperUser(){      
      localStorage.setItem("createsuperuser","1");
      this.router.navigate(['super']);
    }

    createAdministrator() {    
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
      

      console.log("Inside administrator")
      this.newUser.role = 'cmmadmin';
      this.newUser.createdbyid = parseInt(localStorage.getItem("loggedinuserid"));
      this.newUser.cmpid = cmpid;
      this.userService.create(this.newUser)
      .subscribe((res) => {
        console.log("Inside super administrator service response")
      });
  
    }
    

}

