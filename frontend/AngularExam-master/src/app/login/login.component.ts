import {Component} from '@angular/core';
import {AppStateService} from "../app-state.service";
import {NgToastService} from "ng-angular-popup";
import {HttpClient} from "@angular/common/http";
import {UserInfoI} from "../data/utenti";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  show: boolean = false;


  constructor(public appServ: AppStateService, private toast: NgToastService, private http: HttpClient) {
  }

  // submit(username: string, password: string) {
  //
  //   this.http.get<UserInfoI[]>('http://localhost:8080/api/v1/users/login?mail='+ username +'&password='+password).subscribe({
  //     next: data => {
  //       this.toast.success({detail:'Success',summary:"Login effettuato", duration: 3000});
  //       console.warn(data);
  //       let window = document.getElementById('id01');
  //         if (window != null) [
  //           window.style.display = 'none',
  //         ]
  //     },
  //     error: error => {
  //       this.toast.error({detail:'Error',summary:"Username o Password non corretti", duration: 3000});
  //       console.error('There was an error!', error);
  //     }
  //   })


  // if (this.username === this.password) {
  //   localStorage.setItem('loggedUser', this.username);
  //   this.toast.success({detail:'Success',summary:"Login effettuato", duration: 3000});
  //   let window = document.getElementById('id01');
  //   if (window != null) [
  //     window.style.display = 'none',
  //   ]
  // }else {
  //   this.toast.error({detail:'Error',summary:"Username o Password non corretti", duration: 3000});
  //   return
  // }
//     this.clear();
//   }
//   clear(){
//     this.username ="";
//     this.password = "";
//   }


  onSubmit(contactForm) {
    console.log(contactForm.value);
    let product = contactForm.value;
    console.log(product);
    const url = 'http://localhost:8083/api/v1/users/create';

    this.http.post(url, product).subscribe(response => {
      console.log(response); // Risposta del server
      this.toast.success({
        detail: 'Success',
        summary: "Ti sei registrato con successo!",
        duration: 3000
      });
      let window = document.getElementById('id02');
      if (window != null) [
        window.style.display = 'none',
      ]
      console.warn(contactForm);
      contactForm.reset();

    });
  }
}
