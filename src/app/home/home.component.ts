import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//AUTH
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email;
  constructor(
    private userAuth: AngularFireAuth,
    private router: Router
    ) { 
    userAuth.authState.subscribe(data=>{
      this.email = data.email
    })
  }

  ngOnInit() {
    
  }

  logout(){
    this.userAuth.auth.signOut().then(data=>{
      this.email= '';
      this.router.navigate(["/login"]);
    })
  }

}