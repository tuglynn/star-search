import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  response:any = []
  hasData:boolean = false
  hasUserQuery:boolean = false;
  isTimedOut: boolean = false;
  category?: string

  constructor(private http: HttpClient) {}
  public apiFetch(searchQuery:string, searchCat:string, event:Event) {
    event.preventDefault();
    if (this.hasData) this.hasData = false;
    this.isTimedOut = false;
    this.category = searchCat;
    this.hasUserQuery = true;
    let headers = new HttpHeaders({});
    this.http.get<any>(`https://swapi.dev/api/${searchCat}/?search=${searchQuery}`, {
      headers: headers
    }).subscribe(data => {
      this.response = data.results[0];
      let insideInfo =data.results[0]
      if (this.category === 'people') {
        this.planetFetch(insideInfo.homeworld)
      } else {
        this.hasData = true;
      }
      console.log(this.response);
    })
  }
  public planetFetch(searchQuery:string) {
    let headers = new HttpHeaders({});
    this.http.get<any>(searchQuery, {
      headers: headers
    }).subscribe(data => {
      let planetInfo = data.name;
      this.response.homeworld = planetInfo;
      this.hasData = true;
    })
}
}
