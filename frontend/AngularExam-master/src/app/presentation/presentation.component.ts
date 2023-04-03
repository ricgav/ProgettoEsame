import {Component, OnInit} from '@angular/core';
import {AppStateService} from "../app-state.service";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit{
  products: any;

  newProducts: any;

  constructor(public appServ: AppStateService) {
    this.products = appServ.productInfo(appServ.currentUser);
  }

  ngOnInit() {
    function shuffle(newProducts: any) {
      newProducts.sort(() => Math.random() - 0.5);
    }
    this.newProducts = [];
    for (let i = 0; i < this.products.length; i++) {
      this.newProducts[i] = this.products[i];
    }
    shuffle(this.newProducts);
    const firstFiveElem = this.newProducts.slice(0, 5);
    this.newProducts = firstFiveElem;
  }
}
