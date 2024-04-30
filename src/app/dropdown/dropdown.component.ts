import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { SelectItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  image: string; // Add this line to include the image property
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  users: User[];

  selectedUser1!: User;

  selectedUser2!: User;

  selectedUser3!: string;

  selectedUser: { image: String; name: string } = {
    name: '',
    image: '',
  };

  items: SelectItem[];

  item!: string;

  constructor() {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.users = [
      {
        image: '../../assets/images/person.png',
        name: 'محمد الغريب',
      },
      {
        image: '../../assets/images/client 1.jpg',
        name: 'نوره فهمى',
      },
      {
        image: '../../assets/images/client 2.jpg',
        name: 'ليلى عبد الحميد',
      },
      {
        image: '../../assets/images/client 3.jpg',
        name: 'طارق حمدى',
      },
      {
        image: '../../assets/images/client 4.jpg',
        name: 'اسلام على',
      },
    ];
  }
}
