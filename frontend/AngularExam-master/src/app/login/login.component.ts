import {Component} from '@angular/core';
import {AppStateService} from "../app-state.service";
import {NgToastService} from "ng-angular-popup";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  show: boolean = false;
  selectedIsSeller: any;


  constructor(public appServ: AppStateService, private toast: NgToastService, private http: HttpClient) {
  }
}
