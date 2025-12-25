import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-tocart',
  imports: [CommonModule],
  templateUrl: './add-tocart.html',
  styleUrls: ['./add-tocart.css'], // <-- must be 'styleUrls' and an array
})
export class AddTocart {
imagePreview: string | ArrayBuffer | null = null;


onImageSelect(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    alert('Please select an image');
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result;
  };
  reader.readAsDataURL(file);
}
}
