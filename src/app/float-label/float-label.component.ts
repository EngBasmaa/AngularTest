import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-float-label',
  standalone: true,
  imports: [BrowserModule, FormsModule],
  templateUrl: './float-label.component.html',
  styleUrl: './float-label.component.css',
})
export class FloatLabelComponent {
  value: string = 'شراء / تأجير شقة سكنية فى منطقة التجمع الاول';
}
