import { Response } from '@angular/http';
import { CompanyService } from '../../services/company.service';
import Company from '../../models/company.model';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  // selector: 'app-user-login',
  templateUrl: './po.component.html',
  
  // styleUrls: ['./app.component.scss']
})
export class ProductOwner implements OnInit {
  
  show:boolean = true;
  createShow:boolean = true;
  viewShow:boolean = true;
  

  constructor(
    // Private todoservice will be injected into the component by Angular Dependency Injector
    private companyService: CompanyService,
    private router: Router    
    
  ) { }

  
  public newCompany: Company = new Company();
  public dummyCompany: Company = new Company();
   // An Empty list for the visible todo list
   companyList: Company[];
   isView = true;
   dummycompanyList: Company[];
   
  ngOnInit(): void {
    this.companyService.getCompanies()
    .subscribe(companies => {      
      this.companyList = companies;        
    });
    
  }
  

  create() {    
    //CompanyComponent.isView = false;
    this.companyService.create(this.newCompany)
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

