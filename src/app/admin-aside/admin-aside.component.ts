import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-aside',
  standalone: true,
  imports: [],
  templateUrl: './admin-aside.component.html',
  styleUrl: './admin-aside.component.scss'
})
export class AdminAsideComponent {
  @ViewChild('asideElement', {static: false}) asideElement!: ElementRef;

  toggleAside() {
    const aside = this.asideElement.nativeElement;
    aside.classList.toggle('show');
  }
}
