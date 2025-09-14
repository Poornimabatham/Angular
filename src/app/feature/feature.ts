import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { WidgetDialog } from '../widget-dialog/widget-dialog';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-feature',
  imports: [MatSlideToggleModule,MatIconModule,RouterLink ,CommonModule,RouterOutlet  ],
  templateUrl: './feature.html',
  styleUrl: './feature.css'
})
export class Feature {
  constructor (private dialog:MatDialog){}

   openWidget() {
    this.dialog.open(WidgetDialog, {
      width: '400px'
    });
  }

}
