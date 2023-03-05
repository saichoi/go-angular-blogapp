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
  boardDetail: BoardDetail = {
    title: '',
    content: '',
    username: ''
  }

  userId: number | undefined;

  constructor(
    private boardService: BoardService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const boardId = Number(this.route.snapshot.paramMap.get('id'));
    this.boardService.detail(boardId).subscribe({
      next: (v) => {
        this.boardDetail.title = _.get(v, 'title');
        this.boardDetail.content = this.stripHtmlTags(String(_.get(v, 'content')));
        this.boardDetail.username = _.get(v, 'username')
      }
    });

  }

  stripHtmlTags(str: string) {
    if (!str) {
      return '';
    }
    return str.replace(/<[^>]+>/g, '');
  }

}
