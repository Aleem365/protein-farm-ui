import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableService } from '../service/table.service';
import { Product } from '../../../../core/interfaces/product';

@Component({
  selector: 'app-table-content',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.scss'
})
export class TableContentComponent {
  private tableService = inject(TableService);
  public readonly products:Product[]= this.tableService.productDetailsProvider();
}
