import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-deal',
  standalone: true,
  imports: [],
  templateUrl: './new-deal.component.html',
  styleUrl: './new-deal.component.css',
})
export class NewDealComponent implements OnInit {
  @Input() hero: any;

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnit(): void {
    console.warn(this.hero);
  }
}
