import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  imports: [HeaderComponent, SidebarComponent, RouterOutlet],
  selector: 'app-main-layout',
  templateUrl: './main-layout.html',
})
export class MainLayoutComponent {}
