import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AppStateService} from "../app-state.service";


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent {
  order: any;

  constructor(private appServ: AppStateService) {
    this.order = appServ.orderInfo(appServ.currentUser)
  }

}
