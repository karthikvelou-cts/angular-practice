import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService, Product } from './services/products-service'
import { switchMap } from 'rxjs';

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
}