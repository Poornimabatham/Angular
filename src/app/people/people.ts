import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-people',
  imports: [CommonModule,FormsModule],
  templateUrl: './people.html',
  styleUrl: './people.css'
})
export class People implements OnInit {
    Users: any[] = [];
  isLoading = true  
    filteredUsers: any[] = [];
  searchTerm: string = '';
  isModalOpen = false;
  newUser = { name: '', email: '', phone: '', website: '' };
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (data: any) => {
        this.Users = data;
                this.filteredUsers = data;

        this.isLoading = false
        console.log(data);
      }
    )
  }

  onSearch(): void {
    this.filteredUsers = this.Users.filter(user => 
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  getStatus(index: number): string {
  const statuses = ['Delivered', 'Process', 'Canceled'];
  return statuses[index % 3];
}
getStatusColor(index: number): string {
  const status = this.getStatus(index);
  switch(status) {
    case 'Delivered': return '#4CAF50';
    case 'Process': return '#FF9800';
    case 'Canceled': return '#F44336';
    default: return '#9E9E9E';
  }
}

getStatusTextColor(index: number): string {
  return this.getStatus(index) === 'Process' ? 'black' : 'white';
}

  openAddModal() {
    this.isModalOpen = true;
  }
  closeAddModal() {
    this.isModalOpen = false;
  }
  addNewUser() {
    
    if (this.newUser.name && this.newUser.email && this.newUser.phone) {
    const user = {
      id: this.Users.length + 1,
      name: this.newUser.name,
      email: this.newUser.email,
      phone: this.newUser.phone
    };
    this.Users.push(user);
    this.filteredUsers = [...this.Users];
    this.closeAddModal();
  }
  }
}
