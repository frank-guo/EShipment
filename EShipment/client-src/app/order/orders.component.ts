import { Component, OnInit, ChangeDetectorRef, AfterViewChecked, ViewChild, SimpleChanges } from '@angular/core';
import { Order } from '../model/order';
import { OrdersService } from '../service/orders.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { NgForm, FormArray } from '@angular/forms'
import { OrderStatus } from '../model/orderStatus';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {
  private orders: Order[];
  private showOrderModal: boolean;
  private order: Order;
  public onDelete: Function;
  public onEdit: Function;
  public closeModal: Function;
  public saveOrder: Function;
  private showOrderStatusesModal: boolean;
  private openStatusesModal: Function;
  private closeStatusModal: Function;

  constructor(private ordersService: OrdersService,
    private route: ActivatedRoute,
    private location: Location,
    private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.ordersService.getOrders().subscribe(resp => {
      this.orders = resp;
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

  public onSaveChangeClick(): void {
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
    console.log(this.order)
  }

  public onCloseStatusClick(): void {
    this.showOrderStatusesModal = false;
  }
}
