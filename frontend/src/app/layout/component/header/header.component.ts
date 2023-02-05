import { Component, DoCheck, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  isLogin: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    // lodash 설치
    // npm i lodash --save
    // npm i --save-dev @types/lodash

    const username = localStorage.getItem('id');

    if (!_.isNil(username)) {
      this.isLogin = true;
    }
  }

  logout():void{
    localStorage.removeItem('id');
    this.router.navigate(['/']);
    this.isLogin = false;
  }
}
