import { Component } from '@angular/core';
import {AppStateService} from "../app-state.service";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent {
  products: any;

  constructor(public appServ: AppStateService, private toast: NgToastService) {
    this.products = appServ.myProductInfo();
  }

}
