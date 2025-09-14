import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-widget-dialog',
  imports: [MatCardModule, MatButtonModule, MatDialogModule], // ✅ Correct imports
  templateUrl: './widget-dialog.html',
  styleUrl: './widget-dialog.css'
})
export class WidgetDialog {

}
