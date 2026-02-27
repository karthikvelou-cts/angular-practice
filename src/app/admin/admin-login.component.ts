import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <h2>Admin Login</h2>
        <input [(ngModel)]="username" placeholder="Username" class="form-control">
        <input [(ngModel)]="password" type="password" placeholder="Password" class="form-control">
        <button (click)="login()" class="btn-primary">Login</button>
      </div>
    </div>
  `,
  styles: [`
    .login-container { display: flex; justify-content: center; align-items: center; height: 100vh; background: #f0f2f5; }
    .login-card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 100%; max-width: 400px; }
    .form-control { width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
    .btn-primary { width: 100%; padding: 0.75rem; background: #3f51b5; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem; }
    h2 { text-align: center; margin-bottom: 1.5rem; color: #333; }
  `]
})
export class AdminLoginComponent {
  authService = inject(AuthService);
  username = '';
  password = '';

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.authService.adminLogin(this.username);
    } else {
      alert('Invalid credentials (use admin/admin)');
    }
  }
}