import {Component} from '@angular/core';
import {AppStateService} from "./app-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  utenti!: string[];
  loggedUser!: string;
  currentView!: string;

  constructor(private appServ: AppStateService) {
    this.utenti = appServ.utenti;
    this.loggedUser = appServ.currentUser;
    this.currentView = appServ.currentView;
    appServ.observe("login", (utente) =>{
      this.loggedUser = utente;
    })
    appServ.observe("view", (view) =>{
      this.currentView = view;
    })
  }
}
