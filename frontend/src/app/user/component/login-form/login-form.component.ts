import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequestMessage, ResponseLogin} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    const loginData: LoginRequestMessage = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    this.userService.login(loginData).subscribe({
      next: (v: ResponseLogin )=>{
        localStorage.setItem('id', String(v.id));
        this.router.navigate(['/']);
      },
      error: () => {
        alert('아이디 또는 비밀번호를 잘못 입력하였습니다.');
      }
    })
  }
}
