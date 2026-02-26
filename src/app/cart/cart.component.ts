import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule, NumberSymbol } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartService = inject(CartService);
  authService = inject(AuthService);
  isLoading = signal(true);

  ngOnInit(): void {
    // Simulate loading to show skeleton, as cart data is synchronous
    setTimeout(() => this.isLoading.set(false), 300);
  }

  showCheckoutModal = signal(false);
  showOrderSuccess = signal(false);

  customerName = '';
  customerAddress = '';

  openCheckout(): void {
    this.showCheckoutModal.set(true);
  }

  closeCheckout(): void {
    this.showCheckoutModal.set(false);
  }

  placeOrder(): void {
    if (!this.customerName || !this.customerAddress) {
      alert('Please fill in your name and address.');
      return;
    }

    this.cartService.clearCart();
    this.closeCheckout();
    this.showOrderSuccess.set(true);

    // Reset form and hide success message after a delay
    setTimeout(() => {
      this.showOrderSuccess.set(false);
      this.customerName = '';
      this.customerAddress = '';
    }, 3000);
  }
}