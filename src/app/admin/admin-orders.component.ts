import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Orders</h3>
    <table class="admin-table">
      <thead>
        <tr><th>Order ID</th><th>Customer</th><th>Date</th><th>Total</th><th>Status</th></tr>
      </thead>
      <tbody>
        @for (order of orders(); track order.id) {
          <tr>
            <td>#{{ order.id }}</td>
            <td>{{ order.customer }}</td>
            <td>{{ order.date | date }}</td>
            <td>{{ order.total | currency }}</td>
            <td><span [class]="'status ' + order.status.toLowerCase()">{{ order.status }}</span></td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styles: [`
    .admin-table { width: 100%; border-collapse: collapse; }
    .admin-table th, .admin-table td { padding: 0.75rem; border-bottom: 1px solid #eee; text-align: left; }
    .status { padding: 0.25rem 0.5rem; border-radius: 12px; font-size: 0.85rem; }
    .status.pending { background: #fff3cd; color: #856404; }
    .status.shipped { background: #d4edda; color: #155724; }
    .status.cancelled { background: #f8d7da; color: #721c24; }
  `]
})
export class AdminOrdersComponent {
  orders = signal([
    { id: 1001, customer: 'John Doe', date: new Date(), total: 150.00, status: 'Pending' },
    { id: 1002, customer: 'Jane Smith', date: new Date(Date.now() - 86400000), total: 89.99, status: 'Shipped' },
    { id: 1003, customer: 'Bob Johnson', date: new Date(Date.now() - 172800000), total: 25.50, status: 'Cancelled' },
  ]);
}