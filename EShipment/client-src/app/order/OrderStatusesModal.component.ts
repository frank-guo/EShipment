import { Component, Input, SimpleChanges, forwardRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { Order } from '../model/order';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { OrderStatus } from '../model/orderStatus';

@Component({
  selector: 'orderStatusesModal',
  templateUrl: './orderStatusesModal.component.html'
})
export class OrderStatusesModalComponent implements OnInit {
  @Input() public orderStatuses: OrderStatus[];
  @Input() public showModal: boolean
  @Input() public closeModal: Function

  private addStatus: Function;
  private deleteStatus: Function;

  constructor(private cdRef: ChangeDetectorRef) {
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
    this.orderStatuses.push({
      date: null,
      description: null
    })
    console.log("statuses=", this.orderStatuses)
  }

  public onDeleteStatusClick(i): void {
    this.orderStatuses.splice(i, 1);
  }
}
