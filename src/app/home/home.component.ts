import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//AUTH
import { AngularFireAuth } from '@angular/fire/auth';

//DATABASE
import { AngularFirestore, AngularFirestoreCollections } from '@angular/fire/firestore';

import { map } from 'rxjs/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  email;
  products;
  constructor(
    private userAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
    ) { 
    userAuth.authState.subscribe(data=>{
      this.email = data.email
    })
  }

  ngOnInit() {
    this.afs.collection('tuckshop').doc("tuckshop sales").valueChanges()
      .pipe(
        map()
      )
      .subscribe((data: Response)=>{
        this.products = data;
        console.log("data", data);
      })
    
  }

  logout(){
    this.userAuth.auth.signOut().then(data=>{
      this.email= '';
      this.router.navigate(["/login"]);
    })
  }

}