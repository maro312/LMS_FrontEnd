import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../Shared/Services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  showRegisterPassword = false;
  showConfirmPassword = false;
  registerError = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  };

  toggleRegisterPassword() {
    this.showRegisterPassword = !this.showRegisterPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onRegister() {
    this.registerError = '';
    
    if (!this.registerData.email || !this.registerData.password || !this.registerData.name || !this.registerData.confirmPassword) {
      this.registerError = 'Please fill in all fields.';
      return;
    }

    if (!this.registerData.agreeTerms) {
      this.registerError = 'You must agree to the Terms of Service and Privacy Policy.';
      return;
    }

    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.registerError = 'Passwords do not match.';
      return;
    }

    const request = {
      fullName: this.registerData.name,
      email: this.registerData.email,
      password: this.registerData.password
    };

    this.authService.register(request).subscribe({
      next: (response: any) => {
        if (response && response.sessionId) {
          localStorage.setItem('sessionId', response.sessionId);
        }
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        console.error('Register error', err);
        this.registerError = err.error?.message || 'Registration failed.';
      }
    });
  }
}
