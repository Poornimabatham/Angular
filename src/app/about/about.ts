import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,         // Required for ngIf, ngFor, etc.
    MatTabsModule
     // Required for Angular Material components
  ],
  templateUrl: './about.html',
  styleUrls: ['./about.css']  // Fix: was 'styleUrl', should be 'styleUrls'
})
export class About {}
