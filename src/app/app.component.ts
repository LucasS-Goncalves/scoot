import { Component, ViewChild, ElementRef } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('downloadSection', {static: false}) downloadSection!: ElementRef<HTMLDivElement>;

  goToDownloadApp(el: HTMLDivElement){
    el.scrollIntoView()
  }

  listeningToButtonClick(componentRef: Component){
    if(!(componentRef instanceof HomeComponent)){
      return;
    }

    const homeComponent: HomeComponent = componentRef;
    homeComponent.goToDownloadSection.subscribe( () => {
      this.goToDownloadApp(this.downloadSection.nativeElement);
    })
  }
}
