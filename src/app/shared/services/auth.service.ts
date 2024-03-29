import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import { UserService } from './user.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private userService : UserService, private route: ActivatedRoute) { 
    this.user$ = afAuth.authState;
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || '/';
    localStorage.setItem("returnUrl", returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  get AppUser$() : Observable<AppUser>{
    return this.user$.pipe(switchMap(user=>{
      if(!user) return of(null);
      
      return (<Observable<AppUser>> this.userService.get(user.uid));
    }));
  }

}
