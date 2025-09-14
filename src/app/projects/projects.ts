import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects = [
    { title: 'Find Projects', icon: 'fa-solid fa-magnifying-glass' },
    {title:'All People',icon:'fa-solid fa-people'}
]
}
