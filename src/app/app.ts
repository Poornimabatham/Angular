import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    MatIconModule,
    MatSlideToggleModule,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('myapp');
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  showContactSubmenu = false; // 👈 submenu toggle variable

  toggleContactSubmenu() {
    this.showContactSubmenu = !this.showContactSubmenu;
  }
  
}
