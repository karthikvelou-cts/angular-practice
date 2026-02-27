import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService, Product } from '../services/products-service';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="header">
      <h3>Products Management</h3>
      <button (click)="startAdd()" class="btn-primary">Add Product</button>
    </div>

    @if (isEditing()) {
      <div class="edit-form">
        <h4>{{ currentProduct().id ? 'Edit' : 'Add' }} Product</h4>
        <input [(ngModel)]="currentProduct().title" placeholder="Title" class="form-control">
        <input [(ngModel)]="currentProduct().price" type="number" placeholder="Price" class="form-control">
        <input [(ngModel)]="currentProduct().category" placeholder="Category" class="form-control">
        <textarea [(ngModel)]="currentProduct().description" placeholder="Description" class="form-control" rows="3"></textarea>
        <div class="actions">
          <button (click)="saveProduct()" class="btn-success">Save</button>
          <button (click)="cancelEdit()" class="btn-secondary">Cancel</button>
        </div>
      </div>
    }

    <table class="admin-table">
      <thead>
        <tr><th>ID</th><th>Title</th><th>Price</th><th>Category</th><th>Actions</th></tr>
      </thead>
      <tbody>
        @for (product of products(); track product.id) {
          <tr>
            <td>{{ product.id }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.price | currency }}</td>
            <td>{{ product.category }}</td>
            <td>
              <button (click)="editProduct(product)" class="btn-sm">Edit</button>
              <button (click)="deleteProduct(product.id)" class="btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styles: [`
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
    .admin-table { width: 100%; border-collapse: collapse; }
    .admin-table th, .admin-table td { padding: 0.75rem; border-bottom: 1px solid #eee; text-align: left; }
    .btn-primary { background: #3f51b5; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }
    .btn-sm { padding: 0.25rem 0.5rem; margin-right: 0.5rem; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; background: white; }
    .btn-danger { background: #f44336; color: white; border: none; }
    .form-control { width: 100%; padding: 0.5rem; margin-bottom: 0.5rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
    .edit-form { background: #f8f9fa; padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 8px; border: 1px solid #e9ecef; }
    .actions { display: flex; gap: 0.5rem; margin-top: 0.5rem; }
    .btn-success { background: #28a745; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }
    .btn-secondary { background: #6c757d; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }
  `]
})
export class AdminProductsComponent {
  productsService = inject(ProductsService);
  products = signal<Product[]>([]);
  isEditing = signal(false);
  currentProduct = signal<any>({});

  constructor() {
    this.productsService.getProducts().subscribe(data => this.products.set(data));
  }

  startAdd() { this.currentProduct.set({}); this.isEditing.set(true); }
  editProduct(p: Product) { this.currentProduct.set({ ...p }); this.isEditing.set(true); }
  cancelEdit() { this.isEditing.set(false); this.currentProduct.set({}); }
  
  saveProduct() {
    const p = this.currentProduct();
    if (p.id) this.products.update(list => list.map(i => i.id === p.id ? p : i));
    else this.products.update(list => [{ ...p, id: Date.now() }, ...list]);
    this.isEditing.set(false);
  }
  deleteProduct(id: number) { if(confirm('Delete?')) this.products.update(l => l.filter(p => p.id !== id)); }
}