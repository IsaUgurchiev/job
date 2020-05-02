import { Component, OnInit, ViewEncapsulation } from '@angular/core';

const LOGO_IMG = './assets/logo.png';


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

  logoImg = LOGO_IMG;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isReceiveNewMessages = true;
      this.isHaveNewMessages = true;
      }, 2500);
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
