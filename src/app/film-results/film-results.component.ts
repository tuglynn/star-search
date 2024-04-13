import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film-results',
  templateUrl: './film-results.component.html',
  styleUrls: ['./film-results.component.css']
})
export class FilmResultsComponent {
  @Input() response?: any;
  @Input() hasData?: boolean
  @Input() isTimedOut?: boolean;
  isCrawlVisible:boolean = false;

  toggleCrawl(event: Event) {
    event.preventDefault();
    this.isCrawlVisible = !this.isCrawlVisible;
  }
}
