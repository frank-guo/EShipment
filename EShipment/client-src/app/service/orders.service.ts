import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrdersService {
  private baseUrl = '/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private externalApi = '/api'

  constructor(private http: Http) {

  }

  getOrders(): Promise<Order[]> {
    return this.http.get(this.baseUrl + '/orders').toPromise().then(response => {
      let json = response.json();
      return json as Order[]
    }
    ).catch(this.handleError);
  }

  saveOrders(orders: any[]): Promise<Order[]> {
    return this.http.post(this.baseUrl + '/orders', JSON.stringify(orders), { headers: this.headers })
      .toPromise()
      .then(response => {
        let json = response.json();
        return json as Order[]
      }
      ).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occcured', error);
    return Promise.reject(error.message || error);
  }
}
