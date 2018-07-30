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
import { ErrorHandler } from './error.handler'

@Injectable()
export class OrdersService {
  private baseUrl = '/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private idKey = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'

  constructor(private http: HttpClient) {

  }

  getOrders(): Observable<Order[]> {
    let user = JSON.parse(localStorage.getItem('user'))
    return this.http.get<Order[]>(this.baseUrl + '/user/' + user[this.idKey] + '/orders').pipe(
      catchError(ErrorHandler.handleError))
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
      catchError(ErrorHandler.handleError)
      )
  }

  deleteOrder(id: number): Observable<any> {
    let user = JSON.parse(localStorage.getItem('user'))

    return this.http.delete(this.baseUrl + '/user/' + user[this.idKey] + '/order/' + id).pipe(
      catchError(ErrorHandler.handleError)
    )
  }
}
