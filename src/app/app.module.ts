import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import {UserService} from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {UserLoginComponent} from './userlogin.component';
import {SuperUserComponent} from './superuser.component';
import {DashboardComponent} from './dashboard.component';
import {ProductOwnerComponent} from './productowner.component';
import {ApplicationUserComponent} from './applicationuser.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: DashboardComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'super', component: SuperUserComponent },
  { path: 'createpo', component: ProductOwnerComponent },
  { path: 'createau', component: ApplicationUserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserLoginComponent,
    ProductOwnerComponent,
    ApplicationUserComponent,
    SuperUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TodoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
