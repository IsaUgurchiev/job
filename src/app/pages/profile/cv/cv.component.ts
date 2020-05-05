import {Component, OnInit, ViewEncapsulation} from '@angular/core';

const USER_PROFILE_IMG = './assets/profile1.jpg';
const USER_NAME = 'John Adams';
const USER_PROFESSION = 'Frontend Developer';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CvComponent implements OnInit {
  userProfileImg = USER_PROFILE_IMG;
  userName = USER_NAME;
  userProfession = USER_PROFESSION;

  constructor() { }

  ngOnInit(): void {
  }

}
