import { Component } from '@angular/core';
import {AppStateService} from "../app-state.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: any;

  constructor(public appServ: AppStateService) {
  }

}


