import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';


@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'top_colleagues';

  constructor(private authService: AuthService){

  }

  isLogged(){
    return this.authService.isLogged()
  }

  logOut(){
    this.authService.logOut()
  }
  
}
