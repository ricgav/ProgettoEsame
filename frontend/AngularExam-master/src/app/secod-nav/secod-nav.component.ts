import {Component} from '@angular/core';
import {AppStateService} from "../app-state.service";


@Component({
  selector: 'app-secod-nav',
  templateUrl: './secod-nav.component.html',
  styleUrls: ['./secod-nav.component.css']
})


export class SecodNavComponent {
  currentView!: string;

  constructor(public appServ: AppStateService) {
    this.currentView = appServ.currentView;

    appServ.observe("view", (view) => {
      this.currentView = view;
      //console.log(view);
    })
  }
}
