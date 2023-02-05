import { Component, DoCheck, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  isLogin: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    // lodash 설치
    // npm i lodash --save
    // npm i --save-dev @types/lodash

    const username = localStorage.getItem('username');

    console.log('username: ' + username);
    if (!_.isNil(username)) {
      this.isLogin = true;
    }
  }

  logout():void{
    localStorage.removeItem('username');
    this.isLogin = false;
  }
}
