import { Observable } from 'rxjs/internal/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth : AuthService) { }

  canActivate() : Observable<boolean> {
    return this.auth.AppUser$.pipe(map(AppUser => {
      return AppUser.isAdmin;
    }));
  }
}
