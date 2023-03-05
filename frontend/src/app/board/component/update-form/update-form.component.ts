import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import * as _ from "lodash";
import {BoardService} from "../../services/board.service";
import {Board, BoardDetail, BoardUpdate} from "../../models/board";

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent {
  editForm = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    content: new FormControl('', [Validators.minLength(1)]),
  });

  boardId: number;
  userId: number;
  writerId: any;
  boardDetail: BoardDetail = {
    title: '',
    content: '',
    username: ''
  }

  constructor(
    private boardService: BoardService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.boardId = Number(this.route.snapshot.paramMap.get('id'));
    this.userId = Number(localStorage.getItem('id'));
    this.boardService.detail(this.boardId).subscribe({
      next: (v) => {
        this.boardDetail.title = _.get(v, 'title');
        this.boardDetail.content = this.stripHtmlTags(String(_.get(v, 'content')));
        this.boardDetail.username = _.get(v, 'username')
        this.writerId = _.get(v, 'userId');
      }
    });
  }

  onSubmit(): void {
    const updateData: BoardUpdate = {
      title : this.editForm.value.title,
      content : this.editForm.value.content
    }
    if (!_.isEqual(this.userId, this.writerId)) {
      alert('수정 권한이 없습니다.');
      return;
    }

    this.boardService.update(this.boardId, updateData).subscribe(()=>{
      this.router.navigate(['/']);
    })

  }

  stripHtmlTags(str: string) {
    if (!str) {
      return '';
    }
    return str.replace(/<[^>]+>/g, '');
  }

}
