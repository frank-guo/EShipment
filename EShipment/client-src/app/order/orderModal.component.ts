import { Component, Input, SimpleChanges, forwardRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { Order } from '../model/order';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'orderModal',
  templateUrl: './orderModal.component.html',
  styles: ['p-dropdown {width: 172px !important;} p-dropdown /deep/ div:first-child {width: 172px !important;}'],
  providers: [UserService]
})
export class OrderModalComponent implements OnInit {
  @Input() public order: Order;
  @Input() public userId: string;
  @Input() public showModal: boolean
  @Input() public closeModal: Function
  @Input() public saveOrder: Function
  @Input() public userOptions: [any]
  @Input() public title: string;
  private displayValue: string;

  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(private cdRef: ChangeDetectorRef, private userService: UserService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    let userId = changes.userId;
    if (userId && userId.currentValue) {
      this.userService.getUser(userId.currentValue).subscribe(resp => {
        if (this.order != null) {
          this.order.companyName = resp.companyName
        }
      });
    } else {
      if (this.order != null) {
        this.order.companyName = null
      }      
    }
  }

  ngAfterContentChecked() {
  }

  ngAfterViewChecked() {
  }
}
