import { Component, OnInit, ChangeDetectorRef, AfterViewChecked, ViewChild, SimpleChanges } from '@angular/core';
import { Order } from '../model/order';
import { OrdersService } from '../service/orders.service';
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
  private orders: Order[];
  private showOrderModal: boolean;
  private order: Order;
  public onDelete: Function;
  public onEdit: Function;
  public closeModal: Function;

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
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges()
  }

  public onSaveClick(customers: FormArray): void {
    //this.ordersService.saveOrders(this.orders)
  }

  public onAddClick(): void {
    //this.orders.push(new Order());
  }

  public onDeleteClick(index): void {
    //this.orders.splice(index, 1)
  }

  public onEditClick(index): void {
    this.showOrderModal = true;
    this.order = this.orders[index]
  }

  public onColseModalClick(): void {
    this.showOrderModal = false;
  }
}
