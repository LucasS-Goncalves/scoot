import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  openedMenu = false;
  innerWidth: any;
  @Output() goToDownloadSection = new EventEmitter();

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 767 && this.openedMenu === true){
      this.openedMenu = false;
    }
  }

  openMenu(){
    this.openedMenu = !this.openedMenu;
  }

  getScootin(){
    this.goToDownloadSection.emit();
  }
}
