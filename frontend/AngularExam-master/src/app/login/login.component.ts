import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  @Input() navbutton!: string;
  @Output() nav: EventEmitter<string> = new EventEmitter<string>();
}
