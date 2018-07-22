import { Component, Input, SimpleChanges, forwardRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { Order } from '../model/order';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { OrderStatus } from '../model/orderStatus';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'orderStatusesModal',
  templateUrl: './orderStatusesModal.component.html'
})
export class OrderStatusesModalComponent implements OnInit {
  @Input() public orderStatuses: OrderStatus[];
  @Input() public showModal: boolean
  @Input() public closeModal: Function
  @Input() public saveOrder: Function
  @Input() public orderStatusDates: Date[]

  private addStatus: Function;
  private deleteStatus: Function;

  constructor(private ordersService: OrdersService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.addStatus = this.onAddStatusClick.bind(this)
    this.deleteStatus = this.onDeleteStatusClick.bind(this)
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngAfterContentChecked() {
  }

  ngAfterViewChecked() {
  }

  public onAddStatusClick(): void {
    this.orderStatuses.push(new OrderStatus(
      0,
      null,
      null
    ))
    console.log(this.orderStatuses)
  }

  public onDeleteStatusClick(i): void {
    this.orderStatuses.splice(i, 1);
    console.log(this.orderStatuses)
  }

  // This function is to fix the issue that the UI display doesn't correctly reflect orderStatuses
  // when deleting and then adding some statuses
  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
