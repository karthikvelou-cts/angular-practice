import { bootstrapApplication } from '@angular/platform-browser';
import { adminAppConfig } from './app/app.admin.config';
import { AdminComponent } from './app/admin/admin.component';

bootstrapApplication(AdminComponent, adminAppConfig)
  .catch((err) => console.error(err));