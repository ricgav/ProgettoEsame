import {Component} from '@angular/core';
import {AppStateService} from "../app-state.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  show: boolean = false;

  submit() {
    // console.log("username: " + this.username)
    function login(username: string, password: string) {
      if (username === password) {
        localStorage.setItem('loggedUser', username);
        let window = document.getElementById('id01');
        if (window != null) [
          window.style.display = 'none',
        ]
      }else {
        return
      }
    }
    login(this.username, this.password);
    this.clear();
  }
  clear(){
    this.username ="";
    this.password = "";
  }
}
