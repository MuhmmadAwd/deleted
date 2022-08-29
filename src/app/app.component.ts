import { Component, ViewEncapsulation } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Client';

  constructor(private account:AccountService) {
    this.setCurrentUser()
  }

  setCurrentUser(){
    const user = JSON.parse(localStorage.getItem("user") || '{}')    
    this.account.setCurrentUser(user)
  }
}