import { Injectable } from '@angular/core';
import {Board} from "../models/board";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  save(data: Board) {
    return this.http.post(`http://localhost:8080/board/save`, data);
  }

  getList() {
    return this.http.get(`http://localhost:8080/board/list`);
  }

  constructor(private http: HttpClient) { }
}
