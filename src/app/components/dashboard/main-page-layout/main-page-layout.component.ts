import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from "../home/home.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-main-page-layout',
  standalone: true,
  imports: [CommonModule, CardModule, HeaderComponent, FooterComponent],
  templateUrl: './main-page-layout.component.html',
  styleUrl: './main-page-layout.component.scss'
})
export class MainPageLayoutComponent {

}
