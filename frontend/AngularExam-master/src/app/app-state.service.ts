import {Injectable, OnInit} from '@angular/core';
import {UserInfoI} from "./data/utenti";
import {OrderInfoI} from "./data/ordini";
import {ProductInfoI} from "./data/prodotti";
import {HttpClient} from "@angular/common/http";
import {NgToastService} from "ng-angular-popup";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private datiUtenti: object;
  private datiOrdini: OrderInfoI[];
  private datiProdotti: ProductInfoI[];
  private _currentUser: string;
  private _currentView: string;
  private isSeller: boolean;
  private _navigationView: string;

  private observers: { [evento: string]: ((e: string) => void)[] }; // array di funzioni di callback
  fileURL: string = "";
  selectedFile: File = {} as File

  constructor(private toast: NgToastService, private http: HttpClient) {
    this.datiUtenti = {};
    this.datiOrdini = [];
    this.datiProdotti = [];
    this._currentUser = "";
    this.isSeller = false;
    this._currentView = "home";
    this._navigationView = "";
    this.observers = {}; // inizializzo la prop observers
    this.observers['login'] = [];
    this.observers['view'] = [];
    this.observers['navView'] = [];
  }


  observe(evento: string, callback: (e: string) => void) {
    if (this.observers.hasOwnProperty(evento)){
      this.observers[evento].push(callback);
    }
  }

  getUserOrders() {
    this.http.get<OrderInfoI[]>('http://localhost:9191/api/v1/orders/getUserOrders?userId='+ parseInt(localStorage['idUser'])).subscribe({
      next: data => {
        console.warn(data);
        this.datiOrdini = data;
      },
      error: error => {
        this.toast.error({detail: 'Error', summary: "Oh cazzo errore!", duration: 3000});
        console.error('There was an error!', error);
      }
    });
  }

  async getProducts() {
    return new Promise((resolve) => {
      this.http.get<ProductInfoI[]>('http://localhost:9191/api/v1/products').subscribe({
        next: data => {
          console.warn(data);
          this.datiProdotti = data;
          resolve(true);
        },
        error: error => {
          this.toast.error({detail: 'Error', summary: "Disabilitare CORS per proseguire!", duration: 3000});
          console.error('There was an error!', error);
          resolve(false);
        }
      });
    })
  }

  get currentUser(): string {
    return this._currentUser;
  }


  get utenti(): string[] {
    return Object.keys(this.datiUtenti);
  }

  userInfo(utente: string): object | null {
    return this.datiUtenti;
  }

  orderInfo(utente: string): OrderInfoI[] | null {
    return this.datiOrdini;
  }

  productInfo(product: string): ProductInfoI[] | null {
    return this.datiProdotti;
  }


  exists(utente: string): boolean {
    return this.datiUtenti.hasOwnProperty(utente);
  }

  login(username: string, password: string) {
    this.http.get<UserInfoI>('http://localhost:9191/api/v1/users/login?mail='+ username +'&password='+password).subscribe({
      next: data => {
        this.toast.success({detail: 'Success', summary: "Login effettuato", duration: 3000});
        let window = document.getElementById('id01');
        if (window != null) [
          window.style.display = 'none',
        ]
        this.datiUtenti = data;
        this._currentUser = data.name;
        this.currentView = "profile";
        this.isSeller = data.seller;
        localStorage.setItem('loggedUser', this._currentUser);
        localStorage.setItem('idUser', data.id.toString());

        for (let callback of this.observers["login"])
          callback(this._currentUser);
        console.warn(data);
        this.getUserOrders();
      },
      error: error => {
        this.toast.error({detail: 'Error', summary: "Username o Password non corretti", duration: 3000});
        console.error('There was an error!', error);
      }
    });
  }

  logout() {
    if (this._currentUser.length === 0) {
      this.toast.warning({detail: 'Error', summary: "Nessun utente loggato al momento", duration: 3000});
      return;
    }
    this._currentUser = "";
    this.toast.success({detail: 'Success', summary: "Utente sloggato correttamente", duration: 3000});
    localStorage.clear();
    for (let callback of this.observers["login"])
      callback(this._currentUser);
  }

  get seller(): boolean {
    return this.isSeller;
  }

  get currentView(): string {
    return this._currentView;
  }

  set currentView(view: string) {
    if (view === "profile" || view === "order"|| view === "login" || view === "cart" ||view === "product" || view === 'sell' || view === 'home') {
      this._currentView = view;
      for (let callback of this.observers["view"])
        callback(this._currentView);
    }
  }


  get currentNavigationView(): string {
    return this._navigationView;
  }

  set currentNavigationView(navView: string) {
    if (navView === "maglione" || navView === "pantalone" || navView === "tshirt" || navView === "scarpe") {
      this._navigationView = navView;
      for (let callback of this.observers["navView"])
        callback(this._navigationView);
    }
  }

  register(contactForm) {
      console.log(contactForm.value);
      let userProfile = contactForm.value;
      userProfile.image = this.fileURL;
      console.log(userProfile);
      const url = 'http://localhost:9191/api/v1/users/create';
      this.http.post(url, userProfile).subscribe( {
        next: response => {
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
        },
          error: error => {
          this.toast.error({detail: 'Error', summary: "Email già registrata", duration: 3000});
          console.error('There was an error!', error);
        }

      });
    }

  onFileSelected(event) {
      this.selectedFile = <File>event.target.files[0];
      this.fileURL = URL.createObjectURL(this.selectedFile);
      console.warn(this.fileURL)
    }
}
