import { Routes, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const adminRoutes: Routes = [
  { path: 'login', loadComponent: () => import('./admin/admin-login.component').then(m => m.AdminLoginComponent) },
  {
    path: '',
    loadComponent: () => import('./admin/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [() => inject(AuthService).currentUser()?.role === 'admin' || inject(Router).createUrlTree(['/login'])],
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', loadComponent: () => import('./admin/admin-products.component').then(m => m.AdminProductsComponent) },
      { path: 'categories', loadComponent: () => import('./admin/admin-categories.component').then(m => m.AdminCategoriesComponent) },
      { path: 'orders', loadComponent: () => import('./admin/admin-orders.component').then(m => m.AdminOrdersComponent) },
      { path: 'users', loadComponent: () => import('./admin/admin-users.component').then(m => m.AdminUsersComponent) },
    ]
  },
  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) }
];