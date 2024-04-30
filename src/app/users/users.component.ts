import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface User {
  name: string;
  phone: number;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: User[] = [
    { name: 'محمد الغريب', phone: 1076767676 },
    { name: 'أحمد عادل', phone: 1025252525 },
    { name: 'فؤاد عبد الله', phone: 1073737373 },
    { name: 'طارق حمدى', phone: 1092929292 },
    { name: 'اسلام على', phone: 1084848484 },
  ];
  selectedUser: any;

  customFilter(event: any, user: any): boolean {
    const searchText = event.query.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchText) ||
      user.phon.includes(searchText)
    );
  }
}
