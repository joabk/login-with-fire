import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component'
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
];

export class RoutingModule { }