import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Users</h3>
    <table class="admin-table">
      <thead>
        <tr><th>ID</th><th>Username</th><th>Email</th><th>Role</th><th>Actions</th></tr>
      </thead>
      <tbody>
        @for (user of users(); track user.id) {
          <tr>
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td><button class="btn-sm">Edit</button></td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styles: [`
    .admin-table { width: 100%; border-collapse: collapse; }
    .admin-table th, .admin-table td { padding: 0.75rem; border-bottom: 1px solid #eee; text-align: left; }
    .btn-sm { padding: 0.25rem 0.5rem; cursor: pointer; border: 1px solid #ccc; background: white; border-radius: 4px; }
  `]
})
export class AdminUsersComponent {
  users = signal([
    { id: 1, username: 'admin', email: 'admin@techiekart.com', role: 'Admin' },
    { id: 2, username: 'johndoe', email: 'john@example.com', role: 'Customer' },
    { id: 3, username: 'janesmith', email: 'jane@example.com', role: 'Customer' },
  ]);
}