import { Component, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  IsAuthSub : Subscription
  IsAuth = false
  constructor(private _accountservice : AccountService){
    this.IsAuthSub = this._accountservice.IsAuthenticated$.subscribe($event => {
      this.IsAuthDef($event)
    })
  }
  
  IsAuthDef($event : any){
    this.IsAuth = $event
    
  }
}
