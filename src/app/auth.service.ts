// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private apiUrl = 'https://api.escuelajs.co/api/v1/auth/login';

  constructor(private http: HttpClient) {}

  // Function to login user
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }

  // Function to save token (you can enhance this to use a more secure method like HttpOnly cookies)
  saveToken(token: string): void {
    localStorage.setItem('auth_token', token); // Store the token in localStorage (or sessionStorage)
  }

  // Function to get token
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Function to check if the user is logged in
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  // Function to log out user
  logout(): void {
    localStorage.removeItem('auth_token');
  }
}
