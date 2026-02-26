import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  currentUser = signal<{username: string} | null>(null);

  login(username: string) {
    // Mock login logic
    this.currentUser.set({ username });
    this.router.navigate(['/']);
  }

  register(username: string) {
    // Mock register logic
    this.currentUser.set({ username });
    this.router.navigate(['/']);
  }

  logout() {
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }
}