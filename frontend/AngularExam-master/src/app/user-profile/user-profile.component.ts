import {Component, OnInit} from '@angular/core';
import {AppStateService} from "../app-state.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent{
  user: any;
  userImage: any;

  constructor(private appServ: AppStateService, private sanitizer: DomSanitizer) {
    this.user = appServ.userInfo();
    this.userImage = sanitizer.bypassSecurityTrustResourceUrl(this.user.image);
    console.warn(this.userImage);
  }
}
