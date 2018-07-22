import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { OrderStatus } from '../model/orderStatus';
import { Headers, Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { _throw } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class OrdersService {
  private baseUrl = '/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private idKey = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'

  constructor(private http: HttpClient) {

  }

  getOrders(): Observable<Order[]> {
    let user = JSON.parse(localStorage.getItem('user'))
    return this.http.get<Order[]>(this.baseUrl + '/user/' + user[this.idKey] + '/orders');
  }

  saveOrder(order: Order): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let user = JSON.parse(localStorage.getItem('user'))
    order.applicationUser_Id = user[this.idKey]

    return this.http.post<Order>(this.baseUrl + '/user/' + user[this.idKey] + '/order', order, httpOptions).pipe(
      catchError(this.handleError)
      )
  }

  deleteOrder(id: number): Observable<any> {
    let user = JSON.parse(localStorage.getItem('user'))

    return this.http.delete(this.baseUrl + '/user/' + user[this.idKey] + '/order/' + id).pipe(
      catchError(this.handleError)
    )
  }

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
