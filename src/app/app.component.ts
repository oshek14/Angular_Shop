import { AuthService } from './shared/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';

  constructor(private userService : UserService, private auth: AuthService, route: Router){
    auth.user$.subscribe(user=>{
      if(!user) return;
      userService.save(user);
      let returnUrl = localStorage.getItem("returnUrl");
      if(!returnUrl) return;

      localStorage.removeItem("returnUrl");
      route.navigateByUrl(returnUrl);
    });
    
  }
}
