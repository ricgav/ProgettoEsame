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

  constructor(public appServ: AppStateService) {
    this.utenti = appServ.utenti;
    this.loggedUser = appServ.currentUser;
    this.appServ.observe("login", (utente: string) => {
      this.loggedUser = utente;
    })
  }
}
