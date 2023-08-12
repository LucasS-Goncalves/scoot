import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  openedMenu = false;
  innerWidth: any;

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
}
