// src/app/admin/admin.routes.ts
import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin.component').then(m => m.AdminComponent),
    children: [
      {
        path: 'products',
        loadComponent: () => import('./admin-products.component').then(m => m.AdminProductsComponent)
      },
      {
        path: 'categories',
        loadComponent: () => import('./admin-categories.component').then(m => m.AdminCategoriesComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./admin-orders.component').then(m => m.AdminOrdersComponent)
      },
      {
        path: 'users',
        loadComponent: () => import('./admin-users.component').then(m => m.AdminUsersComponent)
      },
    ]
  }
];
