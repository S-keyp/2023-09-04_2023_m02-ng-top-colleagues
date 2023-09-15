import { Component, OnInit } from '@angular/core';
import { AuthService } from './providers/auth.service';
import { Colleague } from './models/colleague';


@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'top_colleagues';

  user!: Colleague

  constructor(private authService: AuthService){ }

  ngOnInit(){
    this.authService.getCurrentUser().subscribe(data => this.user = data)
  }

  isLogged(){
    return this.authService.isLogged()
  }

  logOut(){
    this.authService.logOut()
  }
  
}
