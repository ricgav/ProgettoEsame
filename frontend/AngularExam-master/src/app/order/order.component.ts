import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AppStateService} from "../app-state.service";
import {OrderInfoI} from "../data/ordini";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {
  orders: any;

  constructor(private appServ: AppStateService) {
    this.orders = appServ.orderInfo();
    console.warn(this.orders.productsId);
  }
}
