import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './authguard.guard'; 

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login by default
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'login' }, // Wildcard route for undefined paths
    
];
