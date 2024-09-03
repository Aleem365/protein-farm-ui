import { Component } from '@angular/core';
import { TableContentComponent } from "../table-content/table-content.component";
import { NgStyle } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-feed-details',
  standalone: true,
  imports: [CardModule, ButtonModule, NgStyle,TableContentComponent],
  templateUrl: './feed-details.component.html',
  styleUrl: './feed-details.component.scss'
})
export class FeedDetailsComponent {

}
