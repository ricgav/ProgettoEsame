import {Component} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {AppStateService} from "../app-state.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  user: any;

  constructor(public appServ: AppStateService) {
    this.user = appServ.userInfo(appServ.currentUser)
  }
}
