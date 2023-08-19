import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
    './styles/main-img-section.css',
    './styles/characteristics-section.css',
    './styles/values-section.css',
    './styles/faqs-section.css'
  ]
})
export class AboutComponent {

  questionOpened = false;

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

  faqs = [
    {
      questionSubject: 'How it works',
      questions: [
        {
          question: 'How do I download the app?',
          answer: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
        },
        {
          question: 'Can I find a nearby Scoots?',
          answer: "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information."
        },
        {
          question: ' Do I need a license to ride?',
          answer: "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots."
        },
      ]
    },
    {
      questionSubject: 'Safe driving',
      questions: [
        {
          question: 'Should I wear a helmet?',
          answer: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
        },
        {
          question: 'How about the rules & regulations?',
          answer: "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way."
        },
        {
          question: 'What if I damage my Scoot?',
          answer: "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter."
        },
      ]
    },

  ]

  openQuestion(){
    this.questionOpened = !this.questionOpened;
  }
}
