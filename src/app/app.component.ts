import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatLabelComponent } from './float-label/float-label.component';
import { UsersComponent } from './users/users.component';
import { PriceComponent } from './price/price.component';
import { SuccessComponent } from './success/success.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { WebsitesComponent } from './websites/websites.component';
import { PrComponent } from './pr/pr.component';
import { NewDealComponent } from './new-deal/new-deal.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FloatLabelComponent,
    UsersComponent,
    PriceComponent,
    SuccessComponent,
    DropdownComponent,
    WebsitesComponent,
    PrComponent,
    NewDealComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularTest';

  courses: string[] = ['java', 'python', 'web3', 'blockchain'];
  course!: string;

  onAdd() {
    this.courses.push('صفقة جديدة');
  }

  onRemove(course: string) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
