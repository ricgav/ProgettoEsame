import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  author: string = "Davide Marietti";
  copyrigthYear: number = 2023;
  mail: string = "davide.marietti@gmail.com";
  aumentaCopy() {
    this.copyrigthYear = this.copyrigthYear +1;
  }
}
