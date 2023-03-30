import {Injectable} from '@angular/core';
import {UserInfoI, utenti as infoUtenti} from "./data/utenti";
import {OrderInfoI, ordini as infoOrdini } from "./data/ordini";
import {ProductInfoI, prodotti as InfoProdotti} from "./data/prodotti";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private datiUtenti: { [username: string]: UserInfoI};
  private datiOrdini: { [ordini: string]: OrderInfoI[]};
  private datiProdotti: { [prodotti: string]: ProductInfoI[]};
  private _currentUser: string;
  private _currentView: string;
  private _navigationView: string;

  private observers: { [evento: string]: ((e: string) => void)[] }; // array di funzioni di callback

  constructor() {
    this.datiUtenti = infoUtenti;
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
    if (this.datiProdotti.hasOwnProperty(product))
      return this.datiProdotti[product];
    return null;
  }


  exists(utente: string): boolean {
    return this.datiUtenti.hasOwnProperty(utente);
  }

  loginState(): boolean {
    return (this._currentUser.length >= 0 && this.exists(this._currentUser))
  }

  login(utente: string) {
    if (this._currentUser.length > 0) return;
    if (this.exists(utente)) {
      this._currentUser = utente;
      for (let callback of this.observers["login"])
        callback(this._currentUser);
    }
  }

  logout() {
    if (this._currentUser.length === 0) return;
    this._currentUser = "";
    for (let callback of this.observers["login"])
      callback(this._currentUser);
  }

  get currentView(): string {
    return this._currentView;
  }

  set currentView(view: string) {
    if (view === "profile" || view === "collection"|| view === "login" || view === "cart" ||view === "product") {
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
