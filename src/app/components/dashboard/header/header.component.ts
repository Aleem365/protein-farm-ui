import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ProteinDetailsComponent } from "../protein-details/protein-details.component";
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { HomeComponent } from '../home/home.component';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MegaMenuModule ,FormsModule,DropdownModule,CommonModule,TabViewModule,ToolbarModule,AvatarModule ,ButtonModule,SplitButtonModule, ToastModule],
  providers:[MessageService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[];

  dropdownItems: any[];
  selectedDropdownItem: any;

  constructor(private messageService: MessageService) {
    this.items = [
      { 
        label: 'Protein Detail', 
        icon: 'pi pi-info', 
        routerLink: '/protein-detail' // Add router link to the first item
      },
      { 
        label: 'Another Action', 
        icon: 'pi pi-refresh', 
        command: () => {
         alert("sdljlg");
        } 
      },
      { 
        label: 'More Info', 
        icon: 'pi pi-external-link', 
        command: () => {
          alert("sdljlg");
        } 
      }
    ];
    this.dropdownItems = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' }
    ];
  }
  
  ngOnInit() {
   
  }


  save(severity: string) {
    console.log("woejrk");
  }

}
