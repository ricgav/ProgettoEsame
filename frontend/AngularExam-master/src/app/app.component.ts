import {Component, OnInit} from '@angular/core';
import {AppStateService} from "./app-state.service";
import {waitForAsync} from "@angular/core/testing";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  utenti!: string[];
  loggedUser!: string;
  currentView!: string;
  currentNavigationView!: string;

  constructor(private appServ: AppStateService) {
    this.utenti = appServ.utenti;
    this.loggedUser = appServ.currentUser;
    this.currentView = appServ.currentView;
    this.currentNavigationView = appServ.currentNavigationView;
    appServ.observe("navView", (navView) =>{
      this.currentNavigationView = navView;
    })
    appServ.observe("login", (utente) =>{
      this.loggedUser = utente;
    })
    appServ.observe("view", (view) =>{
      this.currentView = view;
    })
  }

  ngOnInit() {
    this.appServ.getProducts();
  }
}

