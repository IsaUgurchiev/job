import {Component, HostBinding, OnInit} from '@angular/core';

const USER_PROFILE_IMG = './assets/user-pic.jpeg';
const USER_NAME = 'Isa Ugurchiev';
const USER_PROFESSION = 'Frontend Developer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userProfileImg = USER_PROFILE_IMG;
  userName = USER_NAME;
  userProfession = USER_PROFESSION;

  constructor() { }

  ngOnInit(): void {
  }

}
