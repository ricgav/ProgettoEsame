import {Component, OnInit} from '@angular/core';
import {AppStateService} from "../app-state.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartBox: any;

  constructor(private appServ: AppStateService) {
  }

  getProductInCart() {
    var ls= localStorage.getItem("loggedUser");
    if(!ls){window.alert("Effettua prima il Login"); return}

    var cart= localStorage.getItem("cartStorage");
    var cartDeserialized = JSON.parse(cart || '{}');
    console.warn(cartDeserialized);
    this.cartBox = cartDeserialized;
  }

  ngOnInit() {
    this.getProductInCart();
  }

  removeItem(item: any) {
      const items = JSON.parse(localStorage.getItem('cartStorage') || '{}');
      const filtered = items.filter((itemI: { id: any; }) => itemI.id !== item.id);
      localStorage.setItem('cartStorage', JSON.stringify(filtered));
      this.cartBox = JSON.parse(localStorage.getItem('cartStorage') || '{}');
  }
}
