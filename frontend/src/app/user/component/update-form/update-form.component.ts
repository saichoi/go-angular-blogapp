import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ResponseUser, User} from '../../models/user';
import {UserService} from "../../services/user.service";
import * as _ from "lodash";

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
  updateForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  });

  constructor(
    private userService: UserService
  ) {
    const id = Number(localStorage.getItem('id'));

    // DB에 있는 사용자의 데이터를 가져와 넣어준다.
    this.userService.getUser(id).subscribe((res: ResponseUser)=>{
      this.updateForm.setValue({
        'username': res.username,
        'password': res.password,
        'email': res.email
      });
    })

  }

  ngOnInit(): void {}

  onSubmit():void{
    // 사용자로부터 받은 데이터를 가지고 회원정보를 수정한다.
    const id = Number(localStorage.getItem('id'));
    const updateData: User = {
      username: this.updateForm.value.username,
      password: this.updateForm.value.password,
      email: this.updateForm.value.email
    }

    this.userService.update(id, updateData).subscribe({
      next: () => {
        alert('회원정보 수정이 완료되었습니다.')
      },
      error: () => {
        alert('회원정보 수정에 실패했습니다.')
      }
    })
  }

}
