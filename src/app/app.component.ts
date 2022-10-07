import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public search: FormControl = new FormControl('');
  public gifs: any;

  constructor(private http: HttpClient) { }

  public searchGIF(name: string): void {
    this.gifs = this.http.get('http://api.giphy.com/v1/gifs/search', {
      params: { api_key: environment.GIPHY_API_KEY, q: name, limit: '9' }
    }).pipe(map((value: any) => value.data));
  }
}
