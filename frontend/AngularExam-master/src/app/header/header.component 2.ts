import { Component, OnInit } from '@angular/core';
import {first, map} from 'rxjs/operators';
import { UserService } from '../user.service';
import {AuthenticationService} from '../autentication.service.service'
import { User } from '../model/users';
import {config} from "rxjs";

@Component({ templateUrl: 'home.component.html' })
export class HeaderComponent implements OnInit {
  currentUser: User;
  users = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }
}
