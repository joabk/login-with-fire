import { Component, OnInit } from '@angular/core';
import { Validator, Validators, FormControl, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AngularFireAuth, 
    private router: Router) { }

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit() {
  }

  login(formData: FormGroup){
    if(formData.valid){
      this.auth.auth.signInWithEmailAndPassword(formData.value.userName, formData.value.password)
        .then(reponse=>{
          console.log(reponse);
        })
    }
  }

}