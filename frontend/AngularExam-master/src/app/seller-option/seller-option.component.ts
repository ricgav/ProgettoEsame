import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ProductInfoI } from '../data/prodotti';


@Component({
  selector: 'app-seller-option',
  templateUrl: './seller-option.component.html',
  styleUrls: ['./seller-option.component.css']
})
export class SellerOptionComponent {

  constructor(private http: HttpClient) {

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
  
    return this.http.post<ProductInfoI>("http://localhost:8082/api/v1/products/create", product);
    
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
