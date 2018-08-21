import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {UserLoginComponent} from './userlogin.component';
import {DashboardComponent} from './dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: DashboardComponent },
  { path: 'login', component: UserLoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
