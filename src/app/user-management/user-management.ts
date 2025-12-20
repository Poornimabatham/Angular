import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-user-management',
    standalone: true,                // standalone component

  imports: [CommonModule, MatProgressSpinnerModule],
  
  templateUrl: './user-management.html',
  styleUrl: './user-management.css'
})
export class UserManagement implements OnInit{
  Products: any[] = [];
  isModalOpen = false;
  selectedProduct: any = null;
   isLoading = true
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.http.get('https://api.escuelajs.co/api/v1/products').subscribe(
      (data: any) => {
        this.Products = data;
        this.isLoading = false
        console.log(data);
      }
    );
  };
  
  openModal(product: any) {
    this.selectedProduct = product;
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
    this.selectedProduct = null;
  }
}
