import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import * as _ from 'lodash';

@Injectable()
export class OrdersService {
  private baseUrl = '/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private externalApi = '/api'
  private idKey = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'

  constructor(private http: HttpClient) {

  }

  getOrders(): Observable<Order[]> {
    let user = JSON.parse(localStorage.getItem('user'))
    return this.http.get<Order[]>(this.baseUrl + '/user/' + user[this.idKey] + '/orders');
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

  private handleError(error: any): Promise<any> {
    console.error('An error occcured', error);
    return Promise.reject(error.message || error);
  }
}
