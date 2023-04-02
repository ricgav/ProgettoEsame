import {Injectable} from '@angular/core';
import {UserInfoI} from "./data/utenti";
import {OrderInfoI, ordini as infoOrdini } from "./data/ordini";
import {ProductInfoI, products as InfoProdotti} from "./data/prodotti";
import {HttpClient} from "@angular/common/http";
import {NgToastService} from "ng-angular-popup";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private datiUtenti: { [username: string]: UserInfoI[]};
  private datiOrdini: { [ordini: string]: OrderInfoI[]};
  private datiProdotti: ProductInfoI[]=[];
  private _currentUser: string;
  private _currentView: string;
  private _navigationView: string;

  private observers: { [evento: string]: ((e: string) => void)[] }; // array di funzioni di callback

  constructor(private toast: NgToastService,private http: HttpClient) {
    this.datiUtenti = {};
    this.datiOrdini = infoOrdini;
    this.datiProdotti = InfoProdotti;
    this._currentUser = "";
    this._currentView = "profile";
    this._navigationView = "home";
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

  get currentUser(): string {
    return this._currentUser;
  }


  get utenti(): string[] {
    return Object.keys(this.datiUtenti);
  }

  userInfo(utente: string): UserInfoI | null {
    if (this.datiUtenti.hasOwnProperty(utente))
      return this.datiUtenti[utente];
    return null;
  }

  orderInfo(utente: string): OrderInfoI[] | null {
    if (this.datiOrdini.hasOwnProperty(utente))
      return this.datiOrdini[utente];
    return null;
  }

  productInfo(product: string): ProductInfoI[] | null {
    return this.datiProdotti;
  }


  exists(utente: string): boolean {
    return this.datiUtenti.hasOwnProperty(utente);
  }

  loginState(): boolean {
    return (this._currentUser.length >= 0 && this.exists(this._currentUser))
  }

  login(username: string, password: string) {
    this.http.get<UserInfoI[]>('http://localhost:8080/api/v1/users/login?mail='+ username +'&password='+password).subscribe({
      next: data => {
        this.toast.success({detail: 'Success', summary: "Login effettuato", duration: 3000});
        let window = document.getElementById('id01');
        if (window != null) [
          window.style.display = 'none',
        ]
        this.datiUtenti[username] = data;
        this._currentUser = username;
        localStorage.setItem('loggedUser', this._currentUser);
        for (let callback of this.observers["login"])
          callback(this._currentUser);
        console.warn(data);
      },
      error: error => {
        this.toast.error({detail: 'Error', summary: "Username o Password non corretti", duration: 3000});
        console.error('There was an error!', error);
      }
    });
  }

  logout() {
    if (this._currentUser.length === 0) return;
    this._currentUser = "";
    localStorage.clear();
    for (let callback of this.observers["login"])
      callback(this._currentUser);
  }

  get currentView(): string {
    return this._currentView;
  }

  set currentView(view: string) {
    if (view === "profile" || view === "order"|| view === "login" || view === "cart" ||view === "product" || view === 'sell') {
      this._currentView = view;
      for (let callback of this.observers["view"])
        callback(this._currentView);
    }
  }

  get currentNavigationView(): string {
    return this._navigationView;
  }

  set currentNavigationView(navView: string) {
    if (navView === "maglione" || navView === "pantalone" || navView === "tshirt" || navView === "scarpa") {
      this._navigationView = navView;
      for (let callback of this.observers["navView"])
        callback(this._navigationView);
    }
  }
}
