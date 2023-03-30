import { Component } from '@angular/core';
import {AppStateService} from "../app-state.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any;

  cart: string [] = [];
  selectedSize: any;

  constructor(public appServ: AppStateService) {
    this.products = appServ.productInfo(appServ.currentUser);
  }


  addProductToCart(product: string, selectedSize: string) {
    if(selectedSize === undefined){
      window.alert("Scelgiere taglia");
      return
    }
    console.log(selectedSize);
    this.cart.push(product);
    localStorage.setItem('cartStorage',JSON.stringify(this.cart));
    var cart= localStorage.getItem(('cartStorage'))
    console.warn(cart);
  }
}


