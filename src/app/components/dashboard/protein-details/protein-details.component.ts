import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgStyle } from '@angular/common';
import { TableContentComponent } from "./table-content/table-content.component";
@Component({
  selector: 'app-protein-details',
  standalone: true,
  imports: [CardModule, ButtonModule, NgStyle, TableContentComponent],
  templateUrl: './protein-details.component.html',
  styleUrl: './protein-details.component.scss'
})
export class ProteinDetailsComponent {

}
