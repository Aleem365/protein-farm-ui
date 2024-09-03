import { Component } from '@angular/core';
import { TableContentComponent } from "../table-content/table-content.component";
import { NgStyle } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-forms-details',
  standalone: true,
  imports: [CardModule, ButtonModule, NgStyle,TableContentComponent],
  templateUrl: './forms-details.component.html',
  styleUrl: './forms-details.component.scss'
})
export class FormsDetailsComponent {

}
