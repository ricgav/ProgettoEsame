import { Component } from '@angular/core';
import {AppStateService} from "../app-state.service";
import {AppComponent} from "../app.component";
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any;
  cart: string [] = [];
  selectedSize: any;

  constructor(public appServ: AppStateService, private toast: NgToastService) {
    this.products = appServ.productInfo(appServ.currentUser);
  }


  addProductToCart(product: any, selectedSize: string) {
    let ls = localStorage.getItem("loggedUser");
    if (!ls) {
      this.toast.warning({detail:'Warning',summary:"Effettua prima il login", duration: 3000});
      return
    }
    if (selectedSize === undefined) {
      this.toast.warning({detail:'Warning',summary:"Seleziona prima una taglia", duration: 3000});
      return
    }
    console.log(selectedSize);
    let cart = localStorage.getItem("cartStorage");
    if (cart === null) {
      product.size = selectedSize;
      localStorage.setItem('cartStorage', JSON.stringify([product]));
      this.toast.success({detail:'Success',summary:"aggiunto l'articolo al carrello", duration: 3000});
    } else {
      let cartNew = JSON.parse(cart);
      cartNew.push(product);
      product.size = selectedSize;
      console.warn(cart);
      localStorage.setItem('cartStorage', JSON.stringify(cartNew));
      this.toast.success({detail:'Success',summary:"aggiunto l'articolo al carrello", duration: 3000});
    }
  }
}


