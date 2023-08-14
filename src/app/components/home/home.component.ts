import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './styles/main-img-section.css',
    './styles/steps-section.css'
  ]
})
export class HomeComponent {

  steps = [
    {
      iconSrc: '../../../assets/icons/locate.svg',
      title: 'Locate with app',
      description: 'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.'
    },
    {
      iconSrc: '../../../assets/icons/scooter.svg',
      title: 'Pick your scooter',
      description: 'We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.'
    },
    {
      iconSrc: '../../../assets/icons/ride.svg',
      title: 'Locate with app',
      description: 'Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.'
    }
  ];
}
