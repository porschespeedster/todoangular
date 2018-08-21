import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './userlogin.component';


const appRoutes: Routes = [
    { path: '/login', component: UserLoginComponent },

];

export const routing = RouterModule.forRoot(appRoutes);


