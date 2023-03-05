import { Component, OnInit } from '@angular/core';
import {BoardService} from "../../services/board.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as _ from 'lodash';
import {Board, BoardDetail} from "../../models/board";
import {UserService} from "../../../user/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
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
    private userService: UserService,
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
    if (!_.isEqual(this.userId, this.writerId)) {
      alert('삭제 권한이 없습니다.');
      return;
    }

    this.boardService.delete(this.boardId).subscribe((v) => {
      alert('해당 게시글이 삭제되었습니다.');
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
