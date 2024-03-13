import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private elRef: ElementRef) {}

  // ngAfterViewInit() {
  //   this.toggleMenu();
  // }

  toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu) {
      menu.classList.toggle('show');
    } else {
      console.error("Menu element not found.");
    }
  }
}
