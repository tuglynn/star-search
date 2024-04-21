import { Component } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {
  isInfoVisible: boolean = false

  toggleInfo(event: Event) {
    event.preventDefault();
    this.isInfoVisible = !this.isInfoVisible;
  }
}
