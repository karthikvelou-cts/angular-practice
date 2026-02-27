import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  currentUser = signal<{username: string, role: 'admin' | 'customer'} | null>(null);

  login(username: string) {
    // Mock login logic
    this.currentUser.set({ username, role: 'customer' });
    this.router.navigate(['/']);
  }

  adminLogin(username: string) {
    this.currentUser.set({ username, role: 'admin' });
    this.router.navigate(['/']);
  }

  register(username: string) {
    // Mock register logic
    this.currentUser.set({ username, role: 'customer' });
    this.router.navigate(['/']);
  }

  logout() {
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }
}