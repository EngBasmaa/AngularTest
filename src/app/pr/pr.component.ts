import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  name: string;
  image: string; // Add this line to include the image property
}

@Component({
  selector: 'app-pr',
  standalone: true,
  imports: [DropdownModule, FormsModule, CommonModule],
  templateUrl: './pr.component.html',
  styleUrl: './pr.component.css',
})
export class PrComponent {
  users: User[];

  selectedUser1!: User;

  selectedUser2!: User;

  selectedUser3!: string;

  selectedUser: { image: String; name: string } = {
    name: '',
    image: '',
  };

  items!: SelectItem[];

  item!: string;

  constructor() {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.users = [
      {
        image: '../../assets/images/logo.png',
        name: 'فيكتوريا دى ميرو',
      },
      {
        image: '../../assets/images/logo.png',
        name: 'مشروع 2',
      },
      {
        image: '../../assets/images/logo.png',
        name: 'مشروع 3',
      },
    ];
  }
}
