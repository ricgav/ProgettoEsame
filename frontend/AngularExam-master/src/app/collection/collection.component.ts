import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AppStateService} from "../app-state.service";
import {OrderInfoI} from "../data/ordini";


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent {
  orders: any;
//order: OrderInfoI;
  constructor(private appServ: AppStateService) {
    this.orders = appServ.orderInfo(appServ.currentUser);

  }

}
