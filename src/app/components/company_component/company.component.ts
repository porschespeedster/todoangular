import { Response } from '@angular/http';
import { CompanyService } from '../../services/company.service';
import Company from '../../models/company.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  // selector: 'app-user-login',
  templateUrl: './createcmp.component.html',
  
  // styleUrls: ['./app.component.scss']
})
export class CompanyComponent implements OnInit {

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
    // At component initialization the
       //this.companyService.getCompanies()
      // .subscribe(companies => {
      //   // assign the todolist property to the proper http response
      //   this.companyList = companies;
      //   this.dummycompanyList = companies        
      // });
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

