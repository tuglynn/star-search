import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  @Input() loadingTime: number = 5000;
  @Input() isTimedOut?: boolean;

  ngOnInit(): void {
    setTimeout(() => {
      this.isTimedOut = true;
    }, this.loadingTime)
  }
}
