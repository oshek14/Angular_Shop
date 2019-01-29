import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent{

  AppUser : AppUser;
  constructor(private auth: AuthService) { 
    auth.AppUser$.subscribe(AppUser => this.AppUser = AppUser);
  }

  logout(){
    this.auth.logout();
  }

}
