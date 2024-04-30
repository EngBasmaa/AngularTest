import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber'; // Import InputNumberModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [FormsModule, InputNumberModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent {
  value: number = 50000;
}
