import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-component',
  imports: [FormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.scss',
})
export class RegisterComponent {
  username = '';
  private authService = inject(AuthService);

  register() {
    if (this.username.trim()) {
      this.authService.register(this.username);
    }
  }
}
