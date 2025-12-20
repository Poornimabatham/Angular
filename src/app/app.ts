import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Feature } from './feature/feature';
import { Projects } from './projects/projects';
import { UserManagement } from './user-management/user-management';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Feature,
    MatIconModule,
    MatSlideToggleModule,
    UserManagement,
    CommonModule
    // <- add this
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
