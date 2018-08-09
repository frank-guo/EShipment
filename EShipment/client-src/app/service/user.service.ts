import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { OrderStatus } from '../model/orderStatus';
import { Headers, Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import { ErrorHandler } from './error.handler'
import { idKey, roleKey } from '../constant/user.key'

@Injectable()
export class UserService {
  private baseUrl = '/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<[any]> {
    let user = JSON.parse(localStorage.getItem('user'))
    return this.http.get<[any]>(this.baseUrl + '/user/' + user[idKey] + '/users').pipe(
      catchError(ErrorHandler.handleError));
  }

  getUser(userId: string): Observable<any> {
    let user = JSON.parse(localStorage.getItem('user'))
    return this.http.get<any>(this.baseUrl + '/user/' + user[idKey] + '/userToGet/' + userId).pipe(
      catchError(ErrorHandler.handleError));
  }
}

