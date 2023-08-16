import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: [
    './careers.component.css',
    './styles/main-img-section.css',
    './styles/mission-section.css',
    './styles/joinUs-section.css',
    './styles/jobs-section.css'
  ]
})
export class CareersComponent {

  reasons = [
    {
      img: '../../../assets/images/our-tech.jpg',
      number: '01',
      title: 'Our tech',
      description: 'We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!'
    },
    {
      img: '../../../assets/images/our-integrity.jpg',
      number: '02',
      title: 'Our integrity',
      description: 'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.'
    },
    {
      img: '../../../assets/images/our-community.jpg',
      number: '03',
      title: 'Our community',
      description: 'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.'
    },
  ];

  jobs = [
    {
      title: 'General Manager',
      place: 'Jakarta, Indonesia',
    },
    {
      title: 'UI/UX Designer',
      place: 'Yokohama, Japan',
    },
    {
      title: 'Blog Content Copywriter',
      place: 'New York, United States',
    },
    {
      title: 'Graphic Designer',
      place: 'New York, United States',
    },
    {
      title: 'Fleet Supervisor',
      place: 'Jakarta, Indonesia',
    },
    {
      title: 'UX Analyst',
      place: 'London, United Kingdom',
    },

  ]
}
