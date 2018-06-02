import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {
  HttpClient, HttpHeaders, HttpErrorResponse, HttpParams
 } from '@angular/common/http';
import {  Observable } from "rxjs";
import { _throw } from 'rxjs/observable/throw';
import { catchError, retry } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {

  }

  logout(): Observable<any> {
    const body = new HttpParams()
      .set('__RequestVerificationToken', localStorage.getItem('verificationToken'))
    let tokenJson = localStorage.getItem('user')
    let user = JSON.parse(tokenJson)
    let token = user.token
    localStorage.clear()
    return this.http.post('/api/auth/logout', '', {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
      }),
      responseType: 'text'
    })
  }

  //saveOrders(orders: any[]): Promise<Order[]> {
  //  return this.http.post(this.baseUrl + '/orders', JSON.stringify(orders), { headers: this.headers })
  //    .toPromise()
  //    .then(response => {
  //      let json = response.json();
  //      return json as Order[]
  //    }
  //    ).catch(this.handleError);
  //}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return _throw(
      'Something bad happened; please try again later.');
  };
}
