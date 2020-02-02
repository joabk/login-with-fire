import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './routing/routing.module';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { config } from './configs/config'

// MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

//ERROR HANDLER
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { SpinnerComponent } from './common/spinner/spinner.component';
 
@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    //AppRoutingModule,
    AngularFireModule.initializeApp(config.firebase),
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
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
    RegisterComponent, SpinnerComponent ],
  providers:[
    AngularFireAuth,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap:[ AppComponent ]
})
export class AppModule { }
