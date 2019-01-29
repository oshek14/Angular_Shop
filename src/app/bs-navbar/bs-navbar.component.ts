import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { resolve } from 'q';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent{

  
  constructor(private auth: AuthService) { 
   
  }

  logout(){
    this.auth.logout();
  }

}
