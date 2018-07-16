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
  @Input() public addStatus: Function

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngAfterContentChecked() {
  }

  ngAfterViewChecked() {
  }
}
