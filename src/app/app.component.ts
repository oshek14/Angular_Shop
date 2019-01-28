import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';

  constructor(private auth: AuthService, route: Router){
    auth.user$.subscribe(user=>{
      if(user){
        let returnUrl = localStorage.getItem("returnUrl");
        if(returnUrl) route.navigateByUrl(returnUrl);

      }
    })
  }
}
