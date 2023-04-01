import {Component, OnInit} from '@angular/core';
import {AppStateService} from "../app-state.service";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartBox: any;

  constructor(private appServ: AppStateService, private toast: NgToastService) {
  }

  getProductInCart() {
    let ls= localStorage.getItem("loggedUser");
    if(!ls){window.alert("Effettua prima il Login"); return}
    let cart= localStorage.getItem("cartStorage");
    let cartDeserialized = JSON.parse(cart || '[]');
    console.warn(cartDeserialized);
    this.cartBox = cartDeserialized;
    let totalAmount = 0;
    for(let i = 0; i< cartDeserialized.length; i++){
      totalAmount = totalAmount + parseFloat(cartDeserialized[i].price);
    }
    let text = document.getElementById("totalAmount");
    if (text != null)[
      text.innerHTML= "Riepilogo ordine totale : € "+ totalAmount,
    ]
  }

  ngOnInit() {
    this.getProductInCart();
  }

  removeItem(item: any) {
      const items = JSON.parse(localStorage.getItem('cartStorage') || '{}');
      const filtered = items.filter((itemI: { id: any; }) => itemI.id !== item.id);
      localStorage.setItem('cartStorage', JSON.stringify(filtered));
      this.toast.success({detail:'Success',summary:"Rimosso l'articolo dal carrello", duration: 3000});
      this.cartBox = JSON.parse(localStorage.getItem('cartStorage') || '{}');
      var cartDeserialized = this.cartBox;
      let totalAmount = 0;
      for(let i = 0; i< cartDeserialized.length; i++){
        totalAmount = totalAmount + parseFloat(cartDeserialized[i].price);
      }
      let text = document.getElementById("totalAmount");
      if (text != null)[
        text.innerHTML= "Riepilogo ordine totale : € "+ totalAmount,
    ]
  }
}
