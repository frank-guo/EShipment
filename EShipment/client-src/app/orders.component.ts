import { Component, OnInit, ChangeDetectorRef, AfterViewChecked, ViewChild, SimpleChanges } from '@angular/core';
import { Order } from './model/order';
import { OrdersService } from './service/orders.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { NgForm, FormArray } from '@angular/forms'

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  public onDelete: Function;
  public onEdit: Function;

  constructor(private ordersService: OrdersService,
    private route: ActivatedRoute,
    private location: Location,
    private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.ordersService.getOrders())
      .subscribe(orders => this.orders = orders);
    this.route.params.subscribe(params => {
    })
    this.onDelete = this.onDeleteClick.bind(this)
    this.onEdit = this.onEditClick.bind(this)
    this.orders = [
      {
        number: "tttiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        companyName: "hhhh",
        mark: "kkkk",
        containerNumber: "ccc",
        destination: "",
        dischargedPort: "",
        BLNumber: "",
        ETD: null,
        ETA: null,
        numOfGoods: 1,
        weight: 2,
        measurement: 4,
        description: "",
        statuses: null,
        receiveOrderDate: null
      },
      {
        number: "tttiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        companyName: "hhhh",
        mark: "kkkk",
        containerNumber: "ccc",
        destination: "",
        dischargedPort: "",
        BLNumber: "",
        ETD: null,
        ETA: null,
        numOfGoods: 1,
        weight: 2,
        measurement: 4,
        description: "",
        statuses: null,
        receiveOrderDate: null
      }
    ]
  }

  ngAfterViewChecked() {
  }

  public onSaveClick(customers: FormArray): void {
    this.ordersService.saveOrders(this.orders)
  }

  public onAddClick(): void {
    this.orders.push(new Order());
  }

  public onDeleteClick(index): void {
    this.orders.splice(index, 1)
  }

  public onEditClick(index): void {
    this.orders.splice(index, 1)
  }
}
