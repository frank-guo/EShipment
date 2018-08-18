import { Component, OnInit, ChangeDetectorRef, AfterViewChecked, ViewChild, SimpleChanges } from '@angular/core';
import { Order } from '../model/order';
import { OrdersService } from '../service/orders.service';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { NgForm, FormArray } from '@angular/forms'
import { OrderStatus } from '../model/orderStatus';
import { idKey, roleKey } from '../constant/user.key'

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  providers: [OrdersService, UserService]
})
export class OrdersComponent implements OnInit {
  private orders: Order[];
  private filteredOrders: Order[];
  private showOrderModal: boolean;
  private order: Order;
  private currentOrderIdx: number; 
  private users: [any];
  private userOptions: Array<Object>;
  private selectedUser: string;
  public closeModal: Function;
  public saveOrder: Function;
  private showOrderStatusesModal: boolean;
  private openStatusesModal: Function;
  private closeStatusModal: Function;
  private orderStatusDates: Date[];
  private orderModalTitle: string;
  private isAdmin: boolean;

  constructor(private ordersService: OrdersService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.isAdmin = false;
    let user = JSON.parse(localStorage.getItem('user'))
    let roles = user[roleKey]
    if (Object.prototype.toString.call(roles) === '[object Array]') {
      roles.some(role => {
        if (role === "admin") {
          this.isAdmin = true
          return true;
        }
      })
    } else {
      if (roles === 'admin') {
        this.isAdmin = true
      }
    }

    this.ordersService.getOrders().subscribe(resp => {
      this.orders = resp;
    });
    if (this.isAdmin) {
      this.userService.getUsers().subscribe(resp => {
        this.users = resp;
        if (this.users != null) {
          this.users.filter(user => {
            // Don't include the admin user in the dropdown options
            let isAdmin = false;
            user.roleNames.some(role => {
              if (role === "admin") {
                isAdmin = true
                return true;
              }
            })
            return !isAdmin
          }).map(user => {
            if (this.userOptions == null) {
              this.userOptions = new Array<Object>()
            }
            this.userOptions.push({
              label: user.email,
              value: user.id
            })
          })
        }
      });
    }
    this.route.params.subscribe(params => {
    })
    this.closeModal = this.onColseModalClick.bind(this)
    this.saveOrder = this.onSaveChangeClick.bind(this)
    this.openStatusesModal = this.onOpenStatusesClick.bind(this);
    this.closeStatusModal = this.onCloseStatusClick.bind(this);
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges()
  }

  ngDoCheck() {
    this.filteredOrders = this.orders != null ? this.orders.filter(order => {
      return this.selectedUser != null ?  order.applicationUser_Id === this.selectedUser : true
    }) : null
  }

  public onSaveChangeClick(): void {
    //Convert status Date to string
    if (this.orderStatusDates != null) {
      this.orderStatusDates.map((orderStatusDate, idx) => {
        if (this.order != null && this.order.statuses != null) {
          this.order.statuses[idx].date = orderStatusDate.toDateString();
        }
      })
    }

    this.ordersService.saveOrder(this.order).subscribe(resp => {
      if (this.order.id == null) {
        this.order.id = resp;
        this.orders.push(this.order);
      } else {
        this.orders[this.currentOrderIdx] = this.order
      }

      this.showOrderModal = false;
      this.showOrderStatusesModal = false;
    })
  }

  public onAddClick(): void {
    this.showOrderModal = true;
    this.orderModalTitle = "Add Order";
    this.order = new Order()
    let user = JSON.parse(localStorage.getItem('user'))
    this.order.applicationUser_Id = user[idKey]
    this.order.companyName = this.isAdmin ? null : user.companyName
  }

  public onDeleteClick(index): void {
    this.ordersService.deleteOrder(this.orders[index].id).subscribe(resp => {
      this.orders.splice(index, 1)
    })
  }

  //ToDo: Make a copy of orders[index] and keep orders unchanged until saving the changes
  //so that no changes will appear if closing the modal and re-opening it.
  public onEditClick(index: number): void {
    this.showOrderModal = true;
    this.orderModalTitle = "Edit Order";

    this.order = Object.assign({}, this.orders[index])
    this.currentOrderIdx = index
    this.setOrderStatusDates()
  }

  public onColseModalClick(): void {
    this.showOrderModal = false;
  }

  public onOpenStatusesClick(index: number): void {
    this.showOrderStatusesModal = true;
    this.order = this.orders[index];
    this.setOrderStatusDates();
  }

  private setOrderStatusDates() {
    if (this.order != null && this.order.statuses != null) {
      this.orderStatusDates = []
      this.order.statuses.map(orderStatus => {
        this.orderStatusDates.push(new Date(orderStatus.date))
      })
    }
  }

  public onCloseStatusClick(): void {
    this.showOrderStatusesModal = false;
  }
}
