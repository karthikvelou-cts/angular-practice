import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  template: `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <a routerLink="/products" routerLinkActive="active">Products</a>
          <a routerLink="/categories" routerLinkActive="active">Categories</a>
          <a routerLink="/orders" routerLinkActive="active">Orders</a>
          <a routerLink="/users" routerLinkActive="active">Users</a>
          <a (click)="logout()" class="logout-btn">Logout</a>
        </nav>
      </aside>
      <main class="admin-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    :host { display: block; min-height: 100vh; background-color: #f5f5f5; font-family: 'Segoe UI', sans-serif; }
    .admin-layout { display: flex; min-height: 100vh; gap: 1rem; padding: 1rem; box-sizing: border-box; }
    .admin-sidebar { width: 250px; background: #fff; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); height: fit-content; }
    .admin-sidebar nav { display: flex; flex-direction: column; gap: 0.5rem; }
    .admin-sidebar a { padding: 0.75rem; text-decoration: none; color: #333; border-radius: 4px; transition: all 0.2s; cursor: pointer; }
    .admin-sidebar a.active, .admin-sidebar a:hover { background: #e3f2fd; color: #1976d2; font-weight: 500; }
    .admin-content { flex: 1; background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow-y: auto; }
    .logout-btn { margin-top: 1rem; color: #d32f2f !important; }
    .logout-btn:hover { background: #ffebee !important; color: #b71c1c !important; }
  `]
})
export class AdminLayoutComponent {
  authService = inject(AuthService);
  logout() { this.authService.logout(); }
}