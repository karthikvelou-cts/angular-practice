import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./product-component/product-component').then(m => m.ProductComponent)},
    {path: 'about', loadComponent: () => import('./about/about').then(m => m.About)},
    {path: 'products', loadComponent: () => import('./product-component/product-component').then(m => m.ProductComponent)},
    {path: 'products/:id', loadComponent: () => import('./product-detail.component').then(m => m.ProductDetailComponent)},
    {path: 'cart', loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent)},
    {path: 'login', loadComponent: () => import('./login-component/login-component').then(m => m.LoginComponent)},
    {path: 'register', loadComponent: () => import('./register-component/register-component').then(m => m.RegisterComponent)},
];
