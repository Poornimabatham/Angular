import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training.html',
  styleUrls: ['./training.css']   // <-- fixed plural
})
export class Training implements OnInit {
  trainings = [
    { title: 'Fixed training', icon: 'fa-solid fa-magnifying-glass' },
    { title: 'Custom training', icon: 'fa-solid fa-book' },
    { title: 'Live training', icon: 'fa-solid fa-video' },
    { title: 'Online training', icon: 'fa-solid fa-globe' },
    { title: 'Team training', icon: 'fa-solid fa-users' }
  ];

  currentYear: number = new Date().getFullYear();
trainingData = [
  {
    year: 2023,
    trainings: [
      { title: 'Angular Basics', type: 'Fixed training', status: 'Completed' },
      { title: 'Node.js Intro', type: 'Custom training', status: 'Pending' }
    ]
  },
  {
    year: 2024,
    trainings: [
      { title: 'Advanced Angular', type: 'Live training', status: 'Completed' },
      { title: 'React Basics', type: 'Online training', status: 'Completed' },
      { title: 'Team Building', type: 'Team training', status: 'Pending' }
    ]
  },
  {
    year: 2025,
    trainings: [
      { title: 'AI Training', type: 'Custom training', status: 'Ongoing' },
      { title: 'Cloud Workshop', type: 'Fixed training', status: 'Scheduled' }
    ]
  }
];
filteredTrainings: any[] = [];

ngOnInit(): void {
  this.filterData();
}

prevYear() {
  this.currentYear--;
  this.filterData();
  console.log("Previous Year:", this.currentYear);
}

nextYear() {
  this.currentYear++;
  this.filterData();
  console.log("Next Year:", this.currentYear);
}

// filter trainings based on current year
filterData() {
  const yearData = this.trainingData.find(item => item.year === this.currentYear);
  this.filteredTrainings = yearData ? yearData.trainings : [];
}

  
}
