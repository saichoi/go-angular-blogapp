import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import {Router} from "@angular/router";
import {Board} from "../../models/board";
import * as _ from "lodash";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  boardList: any[] = [];

  constructor(
    private boardService: BoardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bindData();
  }

  bindData(): void {
    this.boardService.getList().subscribe((v)=>{
      _.forEach(_.get(v, 'data'), (board) => {
        this.boardList.push(board);
      })
    });
  }


}
