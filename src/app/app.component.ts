import { Component } from '@angular/core';
import { RouterModule,  } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  name = 'Angular'; 
  menu = 'login';
  constructor(private router: RouterModule){

  }
}
