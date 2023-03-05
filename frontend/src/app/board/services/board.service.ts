import { Injectable } from '@angular/core';
import {Board, BoardUpdate} from "../models/board";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  save(data: Board) {
    return this.http.post(`http://localhost:8080/board/saveForm`, data);
  }

  list() {
    return this.http.get(`http://localhost:8080/board/list`);
  }

  detail(id: number) {
    return this.http.get(`http://localhost:8080/board/detail/${id}`)
  }

  update(id: number, data: BoardUpdate) {
    return this.http.put(`http://localhost:8080/board/${id}/updateForm`, data) ;
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/board/delete/${id}`)
  }

  constructor(private http: HttpClient) { }
}
