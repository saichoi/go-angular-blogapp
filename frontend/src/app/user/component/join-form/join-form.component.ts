import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})
export class JoinFormComponent implements OnInit {
  newForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  });

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.newForm.invalid) {
      console.log(this.newForm.errors);
      return;
    }

    const user: User = {
      username: this.newForm.value.username,
      password: this.newForm.value.password,
      email: this.newForm.value.email
    }

    this.userService.join(user).subscribe((v) => {
      // 회원가입에 성공하면 로그인 페이지 이동
      this.router.navigate(['/login']);
    })
  }

}
