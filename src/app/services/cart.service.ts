import { Injectable, signal, computed } from '@angular/core';
import { Product } from './products-service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  totalItems = computed(() => this.cartItems().reduce((acc, item) => acc + item.quantity, 0));
  totalPrice = computed(() => this.cartItems().reduce((acc, item) => acc + (item.product.price * item.quantity), 0));

  addToCart(product: Product) {
    this.cartItems.update(items => {
      const itemInCart = items.find(item => item.product.id === product.id);
      if (itemInCart) {
        itemInCart.quantity++;
        return [...items];
      } else {
        return [...items, { product, quantity: 1 }];
      }
    });
  }

  removeFromCart(productId: number) {
    this.cartItems.update(items => items.filter(item => item.product.id !== productId));
  }

  clearCart() {
    this.cartItems.set([]);
  }
}