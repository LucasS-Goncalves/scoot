import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
    './styles/main-img-section.css',
    './styles/characteristics-section.css',
    './styles/values-section.css'
  ]
})
export class AboutComponent {

  values = [
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
}
