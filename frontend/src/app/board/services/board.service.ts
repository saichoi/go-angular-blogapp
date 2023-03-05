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

  list() {
    return this.http.get(`http://localhost:8080/board/list`);
  }

  detail(id: number) {
    return this.http.get(`http://localhost:8080/board/detail/${id}`)
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/board/delete/${id}`)
  }

  constructor(private http: HttpClient) { }
}
