import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./todo/todo').then(m => m.TodoComponent)},
    {path: 'about', loadComponent: () => import('./about/about').then(m => m.About)},
    {path: 'products', loadComponent: () => import('./product-component/product-component').then(m => m.ProductComponent)},
];
