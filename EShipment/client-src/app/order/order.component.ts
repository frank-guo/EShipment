import { Component, Input, SimpleChanges, forwardRef, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  @Input() public model: any;
  @Input() public onDeleteClick: Function;
  @Input() public onEditClick: Function;
  @Input() public index: number;

  submitted = false;
  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngAfterContentChecked() {
  }
}
