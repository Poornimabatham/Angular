import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  imports: [CommonModule],
  templateUrl: './calender.html',
  styleUrl: './calender.css'
})
export class Calender {
   images: string[] = [
    '/images/gallery1.svg',
    '/images/gallery2.svg',
    '/images/gallery3.svg',
    '/images/gallery4.svg',
    '/images/gallery5.svg'
  ];
}
