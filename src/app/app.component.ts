import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NavheadComponent } from './navhead/navhead.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavheadComponent ,RouterOutlet,LoginComponent,HomeComponent,CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'authWithJWT';
}
