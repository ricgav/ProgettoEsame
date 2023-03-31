import {Component} from '@angular/core';
import {AppStateService} from "../app-state.service";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  show: boolean = false;

  constructor(public appServ: AppStateService, private toast: NgToastService) {
  }

  submit(username: string, password: string) {
    if (this.username === this.password) {
      localStorage.setItem('loggedUser', this.username);
      this.toast.success({detail:'Success',summary:"Login effettuat", duration: 3000});
      let window = document.getElementById('id01');
      if (window != null) [
        window.style.display = 'none',
      ]
    }else {
      this.toast.error({detail:'Error',summary:"Username o Password non corretti", duration: 3000});
      return
    }
    this.clear();
  }
  clear(){
    this.username ="";
    this.password = "";
  }
}
