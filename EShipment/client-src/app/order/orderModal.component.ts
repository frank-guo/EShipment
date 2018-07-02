import { Component, Input, SimpleChanges, forwardRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { Order } from '../model/order';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'orderModal',
  templateUrl: './orderModal.component.html'
})
export class OrderModalComponent implements OnInit {
  @Input() public order: Order;
  @Input() public showModal: boolean
  @Input() public closeModal: Function
  @Input() public saveOrder: Function
  private displayValue: string;

  submitted = false;
  onSubmit() { this.submitted = true; }

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
