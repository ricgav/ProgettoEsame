import { Component } from '@angular/core';
import {AppStateService} from "../app-state.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private appServ: AppStateService) {
  }
}
