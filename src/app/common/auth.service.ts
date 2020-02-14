import { Injectable } from '@angular/core';
//import { AngularFireAuth } from 'angularfire2/auth';
//import { AngularFireDatabase } from 'angularfire2/database';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private appAuth: AngularFireAuth) { }

  login(email: string, password: string): void{
    this.appAuth.auth.signInWithEmailAndPassword(email, password)
      .then(results=>{
        console.log("Login successful", results);
      })
      .catch(err=>{
        console.log("Something went wrong", err.message);
      })
  }

  register(email: string, password: string): void{
    this.appAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res=>{
        console.log("Account created successfully ", res);
      })
  }

  logout(): void{
    this.appAuth.auth.signOut();
  }
}