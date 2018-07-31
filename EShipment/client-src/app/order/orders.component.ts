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
  private showOrderModal: boolean;
  private order: Order;
  private users: [any];
  private userOptions: Array<Object>;
  private selectedUser: string;
  public onDelete: Function;
  public onEdit: Function;
  public closeModal: Function;
  public saveOrder: Function;
  private showOrderStatusesModal: boolean;
  private openStatusesModal: Function;
  private closeStatusModal: Function;
  private orderStatusDates: Date[];

  constructor(private ordersService: OrdersService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.ordersService.getOrders().subscribe(resp => {
      this.orders = resp;
    });
    console.log(this.orders)
    this.userService.getUsers().subscribe(resp => {
      this.users = resp;
      if (this.users != null) {
        let currentUser = JSON.parse(localStorage.getItem('user'))
        if (currentUser != null) {
          let currentUserId = currentUser[idKey]
          if (currentUserId != null) {
            this.users.filter(user => {
              // Don't include the admin user itself in the dropdown options
              return currentUserId !== user.id
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
        }
      }
    });
    this.route.params.subscribe(params => {
    })
    this.onDelete = this.onDeleteClick.bind(this)
    this.onEdit = this.onEditClick.bind(this)
    this.closeModal = this.onColseModalClick.bind(this)
    this.saveOrder = this.onSaveChangeClick.bind(this)
    this.openStatusesModal = this.onOpenStatusesClick.bind(this);
    this.closeStatusModal = this.onCloseStatusClick.bind(this);
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges()
  }

  ngDoCheck() {
    console.log("Before=", this.orders)
    this.orders = this.orders != null ? this.orders.filter(order => {
      return this.selectedUser != null ?  order.applicationUser_Id === this.selectedUser : true
    }) : null
    console.log(this.orders)
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
      }

      this.showOrderModal = false;
      this.showOrderStatusesModal = false;
    })
  }

  public onAddClick(): void {
    this.showOrderModal = true;
    this.order = new Order()
    let user = JSON.parse(localStorage.getItem('user'))
    this.order.companyName = user.companyName
  }

  public onDeleteClick(index): void {
    this.ordersService.deleteOrder(this.orders[index].id).subscribe(resp => {
      this.orders.splice(index, 1)
    })
  }

  public onEditClick(index: number): void {
    this.showOrderModal = true;
    this.order = this.orders[index]
  }

  public onColseModalClick(): void {
    this.showOrderModal = false;
  }

  public onOpenStatusesClick(index: number): void {
    this.showOrderStatusesModal = true;
    this.order = this.orders[index];

    if (this.order.statuses != null) {
      this.orderStatusDates = []
      this.order.statuses.map(orderStatus => {
        this.orderStatusDates.push(new Date(orderStatus.date))
      })
      console.log(this.orderStatusDates)
    }
    console.log(this.order)
  }

  public onCloseStatusClick(): void {
    this.showOrderStatusesModal = false;
  }
}
