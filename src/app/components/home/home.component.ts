import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './styles/main-img-section.css',
    './styles/steps-section.css',
    './styles/benefits-section.css'
  ]
})
export class HomeComponent {

  constructor(private router: Router){}

  goToDownloadSection = new EventEmitter();

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

  benefits = [
    {
      imgSrc: '../../../assets/images/telemetry.jpg',
      title: 'Easy to use riding telemetry',
      description: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
      arrow: '../../../assets/patterns/left-downward-arrow.svg',
      ball: '../../../assets/patterns/circle.svg'
    },
    {
      imgSrc: '../../../assets/images/near-you.jpg',
      title: 'Coming to a city near you',
      description: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
      arrow: '../../../assets/patterns/right-arrow.svg',
      ball: '../../../assets/patterns/circle.svg'
    },
    {
      imgSrc: '../../../assets/images/payments.jpg',
      title: 'Zero hassle payments',
      description: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
      arrow: '../../../assets/patterns/left-downward-arrow.svg',
      ball: '../../../assets/patterns/circle.svg'
    },

  ]

  getScootin(){
    this.goToDownloadSection.emit();
  }

  navigate(index: number){
    if(index === 0){
      this.router.navigate(['about'])
    }

    if(index === 1){
      this.router.navigate(['locations'])
    }

    if(index === 2){
      this.router.navigate(['about'])
    }
  }
}
