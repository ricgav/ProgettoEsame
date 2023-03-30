import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-option',
  templateUrl: './seller-option.component.html',
  styleUrls: ['./seller-option.component.css']
})
export class SellerOptionComponent {

  typeList:type[] = [
    new type("1", "Maglione"),
    new type('2', 'Pantalone'),
    new type('3', 'T-Shirt'),
    new type('4', 'Scarpe')
  ];

  onSubmit(contactForm) {
    console.log(contactForm.value);
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
