import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VacanciesComponent implements OnInit {
  vacancies = [{
    company: 'GitHub',
    vacancy: 'Python Developer',
    description: 'Looking for senior Python Developer (Django) in strong IT company',
    city: 'Berlin',
    date: '1 day ago',
    logo: './assets/github.png'
  },
    {
      company: 'Microsoft',
      vacancy: 'C++ Developer',
      description: 'Looking for senior Python Developer (Django) in strong IT company',
      city: 'London',
      date: '1 day ago',
      logo: './assets/microsoft.png'
    },
    {
      company: 'IBM',
      vacancy: 'Data Engineer',
      description: 'Looking for senior Python Developer (Django) in strong IT company',
      city: 'Paris',
      date: '2 days ago',
      logo: './assets/ibm.png'
    },
    {
      company: 'Google',
      vacancy: 'Python Developer',
      description: 'Looking for senior Python Developer (Django) in strong IT company',
      city: 'San Francisco',
      date: '5 days ago',
      logo: './assets/google.png'
    },
    {
      company: 'Apple',
      vacancy: 'UX Designer',
      description: 'Looking for senior Python Developer (Django) in strong IT company',
      city: 'Los Angeles',
      date: 'week ago',
      logo: './assets/apple.png'
    },{
      company: 'GitHub',
      vacancy: 'Python Developer',
      description: 'Looking for senior Python Developer (Django) in strong IT company',
      city: 'Berlin',
      date: '1 day ago',
      logo: './assets/github.png'
    },
    {
      company: 'Microsoft',
      vacancy: 'C++ Developer',
      description: 'Looking for senior Python Developer (Django) in strong IT company',
      city: 'London',
      date: '1 day ago',
      logo: './assets/microsoft.png'
    },
    {
      company: 'IBM',
      vacancy: 'Data Engineer',
      description: 'Looking for senior Python Developer (Django) in strong IT company',
      city: 'Paris',
      date: '2 days ago',
      logo: './assets/ibm.png'
    },
    {
      company: 'Google',
      vacancy: 'Python Developer',
      description: 'Looking for senior Python Developer (Django) in strong IT company',
      city: 'San Francisco',
      date: '5 days ago',
      logo: './assets/google.png'
    },
    {
      company: 'Apple',
      vacancy: 'UX Designer',
      description: 'Looking for senior Python Developer (Django) in strong IT company',
      city: 'Los Angeles',
      date: 'week ago',
      logo: './assets/apple.png'
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
