import { Observable } from 'rxjs/internal/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth : AuthService, private userService : UserService) { }

  canActivate() : Observable<boolean> {
    return this.auth.user$.pipe(switchMap(user=>{
      return this.userService.get(user.uid)
    })).pipe(map(AppUser => {
      return AppUser.isAdmin;
    }));
  }
}
