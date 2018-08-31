import { Response } from '@angular/http';
import { CompanyService } from '../../services/company.service';
import { DomainService } from '../../services/domain.service';
import { ApplicationService } from '../../services/application.service';
import Company from '../../models/company.model';
import Domain from '../../models/domain.model';
import Application from '../../models/application.model';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  // selector: 'app-user-login',
  templateUrl: './application.component.html',
  
  // styleUrls: ['./app.component.scss']
})
export class ApplicationComponent implements OnInit {
  
  show:boolean = true;
  createShow:boolean = true;
  viewShow:boolean = true;
  cmpid:number = parseInt(localStorage.getItem("loggedinusercmpid"));
  

  constructor(
    // Private todoservice will be injected into the component by Angular Dependency Injector
    private companyService: CompanyService,
    private domainService: DomainService,
    private applicationService: ApplicationService,
    private router: Router    
    
  ) { }

  
  public newApplication: Application = new Application();
  public dummyCompany: Company = new Company();
   // An Empty list for the visible todo list
   companyList: Company[];
   domainList: Domain[];   
   isView = true;
   dummycompanyList: Company[];
   
  ngOnInit(): void {
    
    this.domainService.getCompanyDomain(this.cmpid)
    .subscribe((domains) => {
      console.log("Domains"+domains)
      this.domainList = domains
      console.log("Domains"+this.domainList)
    });   

    this.companyService.getCompanies()
    .subscribe(companies => {
      // assign the todolist property to the proper http response     

      this.companyList = companies;          

    });
    
  }
  

  create() {    
    //CompanyComponent.isView = false;
    this.applicationService.create(this.newApplication)
    .subscribe((res) => {

    });   

  }

  viewCompanyProfile() {    
    //CompanyComponent.isView = true;
    this.companyService.getCompanies()
    .subscribe((companies) => {        
      console.log('Inside view company profile')      
      this.companyList = companies;
      //console.log(CompanyComponent.isView)      
      this.router.navigate(['createcp']);
    });   

  }

  

}

