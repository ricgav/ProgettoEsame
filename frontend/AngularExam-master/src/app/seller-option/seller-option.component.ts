import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ProductInfoI } from '../data/prodotti';
import {NgToastService} from "ng-angular-popup";
import {AppStateService} from "../app-state.service";



@Component({
  selector: 'app-seller-option',
  templateUrl: './seller-option.component.html',
  styleUrls: ['./seller-option.component.css']
})
export class SellerOptionComponent {

  constructor(private appServ: AppStateService,private toast: NgToastService, private http: HttpClient) {

  }

  typeList:type[] = [
    new type("maglione", "Maglione"),
    new type('pantalone', 'Pantalone'),
    new type('tshirt', 'T-Shirt'),
    new type('scarpe', 'Scarpe')
  ];

  onSubmit(contactForm) {
    console.log(contactForm.value);
    let product = contactForm.value;
    product.sellerId = parseInt(localStorage['idUser']);
    console.log(product);
    const url = 'http://localhost:9191/api/v1/products/create';

    this.http.post(url, product).subscribe(response => {
      console.log(response); // Risposta del server
      this.toast.success({detail: 'Success', summary: "Il tuo prodotto è stato caricato con successo!", duration: 3000});
      this.appServ.getProducts();
      this.appServ.getUserProducts();
      contactForm.reset();
    });
  }

}

export class type {
  id:string;
  name:string;

  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
