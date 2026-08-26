import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../Shared/Services/auth.service';
import { LoginResponse } from '../../../../Shared/Models/Auth/login-response';
import { LoginData } from './Models/loginData';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  showLoginPassword = false;
  loginError = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  loginData: LoginData = {
    email: '',
    password: ''
  };

  toggleLoginPassword() {
    this.showLoginPassword = !this.showLoginPassword;
  }

  onLogin() {
    this.loginError = '';
    if (!this.loginData.email || !this.loginData.password) return;

    this.authService.login(this.loginData).subscribe({
      next: (response: LoginResponse) => {
        if (response && response.sessionId) {
          localStorage.setItem('sessionId', response.sessionId);
          this.router.navigate(['/']);
        }
      },
      error: (err: any) => {
        console.error('Login error', err);
        this.loginError = err.error?.message || 'Invalid credentials or login failed.';
      }
    });
  }
}
