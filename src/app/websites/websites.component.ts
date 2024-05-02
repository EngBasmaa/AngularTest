import { Component, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
interface User {
  name: string;
  image: string; // Add this line to include the image property
}

@Component({
  selector: 'app-websites',
  standalone: true,
  imports: [DropdownModule, FormsModule, CommonModule],
  templateUrl: './websites.component.html',
  styleUrl: './websites.component.css',
})
export class WebsitesComponent {
  @Input()
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
        image: '../../assets/images/instagram.jpg',
        name: 'منصة الانستجرام ',
      },
      {
        image: '../../assets/images/linkedin.png',
        name: 'منصة لينكد ان ',
      },
      {
        image: '../../assets/images/telegram.png',
        name: 'منصة التليجرام ',
      },
      {
        image: '../../assets/images/twitter.png',
        name: 'منصة التويتر ',
      },
      {
        image: '../../assets/images/whatsapp.png',
        name: 'منصة الواتس اب',
      },
    ];
  }
}
