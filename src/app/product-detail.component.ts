import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, ProductsService } from './services/products-service';
import { switchMap } from 'rxjs';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);

  product = signal<Product | null>(null);

  constructor() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.productsService.getProduct(Number(id));
      })
    ).subscribe(product => {
      this.product.set(product);
    });
  }

  addToCart() {
    const product = this.product();
    if (product)
      this.cartService.addToCart(product);
  }
}