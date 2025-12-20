import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,         // Required for ngIf, ngFor, etc.
    MatTabsModule
     // Required for Angular Material components
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
constructor(private router: Router) {}
  async gotoDashboard() {
    this.router.navigate(['/projects']);
  }
}
