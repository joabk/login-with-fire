import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../common/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService){}

  ngOnInit() {}

  registrationFrom = new FormGroup({
    fullName: new FormControl('', Validators.required),
    emailAddress: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })

  register(){
    this.authService.register(this.emailAddress.value,this.password.value);
  }
  get emailAddress(){
    return this.registrationFrom.get('emailAddress');
  }

  get password(){
    return this.registrationFrom.get('password');
  }

  get confirmPassword(){
    return this.registrationFrom.get('confirmPassword');
  }

  get fullName(){
    return this.registrationFrom.get('fullName');
  }
}