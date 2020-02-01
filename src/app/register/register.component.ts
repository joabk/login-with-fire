import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register = new FormGroup({
    fullName: new FormControl('', Validators.required),
    emailAddress: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })
}