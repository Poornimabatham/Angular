import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-management',
  imports: [CommonModule],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css'
})
export class UserManagement implements OnInit{
  Products: any[] = [];
  modalRef?:BsModalRef
  
  constructor(private http: HttpClient,private modalService:BsModalService) { }
  
  
  addToCart(template: TemplateRef<any>) {
    // ✅ show() is called on SERVICE
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.http.get('https://api.escuelajs.co/api/v1/products').subscribe(
      (data: any) => {
        this.Products = data;
        console.log(data);
      }
    );
  };
  
   closeModal() {
    this.modalRef?.hide();
  }
}
