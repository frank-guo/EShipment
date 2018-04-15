import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders.component';
import { OrderComponent } from './order.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TableModule,
    RouterModule.forRoot([
      {
        path: 'angularApp',
        component: OrdersComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
