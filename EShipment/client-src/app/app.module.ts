import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrdersComponent } from './order/orders.component';
import { OrderComponent } from './order/order.component';
import { OrderModalComponent } from './order/orderModal.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TableModule,
    InputTextModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'angularApp',
        component: OrdersComponent
      }
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
