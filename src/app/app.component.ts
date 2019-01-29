import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';

  constructor(private userService : UserService, private auth: AuthService, route: Router){
    auth.user$.subscribe(user=>{
      if(user){
        userService.save(user);
        let returnUrl = localStorage.getItem("returnUrl");
        route.navigateByUrl(returnUrl);
      }
    })
    
  }
}
