import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a routerLink="/" class="btn">Go Back Home</a>
    </div>
  `,
  styles: [`
    .not-found {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-height: 400px;
      text-align: center;
      color: #333;
    }
    h1 { font-size: 6rem; margin: 0; color: #e74c3c; }
    p { font-size: 1.5rem; margin: 1rem 0 2rem; }
    .btn {
      padding: 0.75rem 1.5rem;
      background-color: #3498db;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    .btn:hover { background-color: #2980b9; }
  `]
})
export class NotFoundComponent {}