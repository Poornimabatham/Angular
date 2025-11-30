import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatSlideToggleModule,MatButtonModule,CommonModule,RouterModule  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
    menuOpen = false;

  isDrawerOpen: boolean = false;
  
  constructor(private router: Router) { }
  
  gotoHome() {
    this.router.navigate(['/']);
  }
  
  gotoFeature() {
    console.log("hyy")
    this.router.navigate(['/feature']);
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
  
  closeDrawer() {
    this.isDrawerOpen = false;
  }


toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

}

