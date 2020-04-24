import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isHaveNewMessages = false;
  isReceiveNewMessages = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isReceiveNewMessages = true;
      this.isHaveNewMessages = true;
      }, 3000);
  }

  onMenuOpened(): void {
    this.isMenuOpen = true;
  }

  onMenuClosed(): void {
    this.isMenuOpen = false;
  }

  onBellMouseEnter(): void {
    this.isReceiveNewMessages = false;
  }
}
