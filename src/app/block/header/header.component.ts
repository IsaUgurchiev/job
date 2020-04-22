import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMenuOpened(): void {
    this.isMenuOpen = true;
  }

  onMenuClosed(): void {
    this.isMenuOpen = false;
  }
}
