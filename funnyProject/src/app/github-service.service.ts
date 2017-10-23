import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GithubServiceService {

  constructor(private http: Http) { }

  getUser(stxt): Observable<any> {
    const url = 'http://api.github.com/search/users?q=' + stxt;
    return this.http.get(url).map(res => {
      return res.json();
    });
  }
  getUserDetails(uId): Observable<any> {
    const url = 'http://api.github.com/users/' + uId;
    return this.http.get(url).map( res => {
      const data = res.json();
      return data;
    });
  }

}
