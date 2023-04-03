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
  selectedFile: File = {} as File

  fileURL: string = "";


  constructor(public appServ: AppStateService, private toast: NgToastService, private http: HttpClient) {
  }


  onSubmit(contactForm) {
    console.log(contactForm.value);
    let product = contactForm.value;
    product.image = this.fileURL;
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


  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.fileURL = URL.createObjectURL(this.selectedFile);
    console.warn(this.fileURL)
  }
}
