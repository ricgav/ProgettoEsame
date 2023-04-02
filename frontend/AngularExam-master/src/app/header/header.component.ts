import {Component} from '@angular/core';
import {AppStateService} from "../app-state.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  utenti!: string[];
  loggedUser!: string;
  currentView!: string;
  currentNavigationView!: string;

  constructor(public appServ: AppStateService) {
    this.utenti = appServ.utenti;
    this.loggedUser = appServ.currentUser;
    this.currentView = appServ.currentView;
    this.currentNavigationView = appServ.currentNavigationView;

    this.appServ.observe("login", (utente: string) => {
      this.loggedUser = utente;
    })

    appServ.observe("view", (view) => {
      this.currentView = view;
      console.log(view);
    })

    appServ.observe("navView", (navView) => {
      this.currentView = navView ;
      this.appServ.getProductsByType();
      console.log(navView);
    })
  }
}
