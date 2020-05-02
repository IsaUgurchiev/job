import { Component, OnInit, ViewEncapsulation } from '@angular/core';

const LOGO_IMG = './assets/logo.png';
const USER_PROFILE_IMG = './assets/user-pic.jpeg';
const USER_NAME = 'Isa Ugurchiev';
const USER_PROFESSION = 'Frontend Developer';

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
  userProfileImg = USER_PROFILE_IMG;
  userName = USER_NAME;
  userProfession = USER_PROFESSION;

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
