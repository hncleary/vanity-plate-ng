import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /** Get content from URL in json format */
  public getUrl(url: string): Observable<unknown> {
      return this.http.get(url, { responseType: 'json'});
  }
}
