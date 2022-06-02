import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  BoolForLogin = true
  BoolForRegister = false
  UserName = ''
  Password = ''
  Email = ''
  data = {}

  constructor(private _accountservice : AccountService , private router : Router) { }

  ngOnInit(): void {
  }

  ChangeSections(){
    this.BoolForLogin = !this.BoolForLogin
    this.BoolForRegister = !this.BoolForRegister
  }

  Login(){
    this.data = {
      'username' : this.UserName,
      'password' : this.Password
    }
    this._accountservice.Login(this.data).subscribe(response => {
      if (response.status == 200) {        
        this._accountservice.IsAuthenticated$.next(true)
        this.router.navigate(['/'])
      }
    });
  }

  Register(){
    this.data = {
      'username' : this.UserName,
      'password' : this.Password,
      'email' : this.Email
    }

    this._accountservice.Register(this.data).subscribe(response => {
      if (response.status == 200) {
        this.ChangeSections()
      }
    })
  }

}
