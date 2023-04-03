import {Component, OnInit} from '@angular/core';
import {AppStateService} from "../app-state.service";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent{
  products: any;


  constructor(public appServ: AppStateService) {
    let _this = this;
    this.appServ.getProducts().then(function() {
      _this.products = appServ.productInfo(appServ.currentUser);
      _this.products = _this.products.sort(() => Math.random() - 0.5);
    });

  }
}
