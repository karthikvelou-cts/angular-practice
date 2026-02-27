import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products-service';

@Component({
  selector: 'app-admin-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="header">
      <h3>Categories</h3>
      <div class="add-box">
        <input [(ngModel)]="newCategory" placeholder="New Category Name" class="form-control">
        <button (click)="addCategory()" class="btn-primary">Add</button>
      </div>
    </div>
    <ul class="list-group">
      @for (category of categories(); track category) {
        <li class="list-item">
          {{ category | titlecase }}
          <button (click)="deleteCategory(category)" class="btn-sm btn-danger">Delete</button>
        </li>
      }
    </ul>
  `,
  styles: [`
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
    .add-box { display: flex; gap: 0.5rem; }
    .list-group { list-style: none; padding: 0; }
    .list-item { padding: 1rem; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; }
    .btn-primary { background: #3f51b5; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }
    .btn-danger { background: #f44336; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer; }
    .form-control { padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; }
  `]
})
export class AdminCategoriesComponent {
  productsService = inject(ProductsService);
  categories = signal<string[]>([]);
  newCategory = '';

  constructor() { this.productsService.getCategories().subscribe(data => this.categories.set(data)); }
  addCategory() { if (this.newCategory) { this.categories.update(l => [...l, this.newCategory]); this.newCategory = ''; } }
  deleteCategory(cat: string) { if(confirm('Delete ' + cat + '?')) this.categories.update(l => l.filter(c => c !== cat)); }
}