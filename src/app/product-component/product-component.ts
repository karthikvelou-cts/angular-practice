import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product, ProductsService } from '../services/products-service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-component.html',
  styleUrls: ['./product-component.scss']
})
export class ProductComponent {
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);
  products = signal<Product[]>([]);
  categories = signal<string[]>([]);
  sortOrder = signal<string>('');
  filterCategory = signal<string>('');

  filteredProducts = computed(() => {
    let products = this.products();
    const category = this.filterCategory();
    const sort = this.sortOrder();

    if (category) {
      products = products.filter((p) => p.category === category);
    }

    if (sort) {
      products = products.sort((a, b) => {
        return sort === 'asc' ? a.price - b.price : b.price - a.price;
      });
    }
    return products;
  });

  constructor() {
    this.productsService.getProducts().subscribe((res) => {
      this.products.set(res);
    });
    this.productsService.getCategories().subscribe((res) => {
      this.categories.set(res);
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
