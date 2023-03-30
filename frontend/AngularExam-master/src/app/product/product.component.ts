import { Component } from '@angular/core';
import {AppStateService} from "../app-state.service";
import {AppComponent} from "../app.component";

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
    let ls= localStorage.getItem("loggedUser");
    if(!ls){ window.alert("Effettua prima il Login"); return}
    if(selectedSize === undefined){ window.alert("Scegliere taglia"); return}
    console.log(selectedSize);
    let cart= localStorage.getItem("cartStorage");
    if (cart === null ){
      localStorage.setItem('cartStorage',JSON.stringify([product]));
    } else {
      let cartNew = JSON.parse(cart);
      cartNew.push(product);
      console.warn(cart);
      localStorage.setItem('cartStorage',JSON.stringify(cartNew));
    }
  }
}


