import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { LoginRequest } from '../Models/Auth/login-request';
import { LoginResponse } from '../Models/Auth/login-response';
import { RegisterRequest } from '../Models/Auth/register-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  // Using environment.apiUrl which is 'http://localhost:5114/'
  private apiUrl = `${environment.apiUrl}api/Auth`;

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

  register(userData: RegisterRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
}
