import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Board} from "../../models/board";
import {BoardService} from "../../services/board.service";
import { Router } from '@angular/router';
import {UserService} from "../../../user/services/user.service";

@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.scss']
})
export class SaveFormComponent implements OnInit {
  newForm = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    content: new FormControl('', [Validators.minLength(1)]),
  });

  constructor(
    private boardService: BoardService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.newForm.invalid) {
      console.log(this.newForm.errors);
      return;
    }

    const board: Board = {
      title: this.newForm.value.title,
      content: this.newForm.value.content,
      userId: Number(localStorage.getItem('id'))
    }

    this.boardService.save(board).subscribe((v)=>{
      this.router.navigate(['board'])
    })
  }

}
