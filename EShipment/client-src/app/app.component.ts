import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { OrdersService } from './service/orders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent implements OnInit{
  userName: string;

  constructor(private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private location: Location,
    private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    this.userName = user ? user.email : null;
  }

  onLogoutClick() {
    this.authenticationService.logout().subscribe(resp => {
      document.open()
      document.write(resp)
      document.close()
    });
    //this.ordersService.getOrders().subscribe(resp => {
    //  console.log(resp)
    //});
    //localStorage.clear()
  }
}
