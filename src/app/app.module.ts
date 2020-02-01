import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent},
      { path: 'login', component: LoginComponent},
      { path: 'home', component: HomeComponent},
      { path: 'register', component: RegisterComponent},
    ])
    ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    LoginComponent, 
    HomeComponent, 
    RegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
