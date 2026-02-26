import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./todo/todo').then(m => m.TodoComponent)},
    {path: 'about', loadComponent: () => import('./about/about').then(m => m.About)},
    {path: 'products', loadComponent: () => import('./product-component/product-component').then(m => m.ProductComponent)},
    {path: 'login', loadComponent: () => import('./login-component/login-component').then(m => m.LoginComponent)},
    {path: 'register', loadComponent: () => import('./register-component/register-component').then(m => m.RegisterComponent)},
];
