import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../../Components/auth/auth.component';
import { RegisterComponent } from '../../Components/register/register.component';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, AuthComponent, RegisterComponent],
  templateUrl: './auth.page.html',
  styleUrl: './auth.page.scss',
})
export class AuthPage {
  currentTab: 'signin' | 'register' = 'signin';

  switchTab(tab: 'signin' | 'register') {
    this.currentTab = tab;
  }
}
